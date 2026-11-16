import { NextResponse } from 'next/server';
import { chatSystemPrompt } from '@/lib/ai/eleos-knowledge';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ChatMessage = { role: 'user' | 'assistant'; content: string };
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1200;
const DEFAULT_MODEL = 'openai/gpt-oss-120b';
const FALLBACK = 'I’m temporarily unable to answer through the virtual assistant. Please contact Eleos directly by phone or WhatsApp, and the team will assist you.';

// Best-effort per-instance throttle. For globally shared limits across serverless
// instances, provision a shared limiter before public launch.
const requests = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const active = (requests.get(ip) || []).filter(timestamp => now - timestamp < 60_000);
  active.push(now);
  requests.set(ip, active);
  return active.length > 8;
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return NextResponse.json({ error: 'Request could not be accepted.' }, { status: 403 });
    } catch {
      return NextResponse.json({ error: 'Request could not be accepted.' }, { status: 403 });
    }
  }
  const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim().slice(0, 80);
  if (Number(request.headers.get('content-length') || 0) > 24_000) return NextResponse.json({ error: 'Message is too long.' }, { status: 413 });

  let body: { messages?: unknown };
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Please send a valid message.' }, { status: 400 }); }
  if (!Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > MAX_MESSAGES) {
    return NextResponse.json({ error: 'Please send a shorter conversation.' }, { status: 400 });
  }
  const messages = body.messages as ChatMessage[];
  if (messages.some(message => !message || !['user', 'assistant'].includes(message.role) || typeof message.content !== 'string' || !message.content.trim() || message.content.length > MAX_MESSAGE_LENGTH)) {
    return NextResponse.json({ error: 'Please check your message and try again.' }, { status: 400 });
  }
  if (messages[messages.length - 1]?.role !== 'user') return NextResponse.json({ error: 'Please send a message to continue.' }, { status: 400 });

  const latest = messages[messages.length - 1].content;
  if (/(suicid|self[- ]?harm|hurt myself|kill myself|end my life|want to die|immediate danger|overdose|can(?:not|'t) breathe|severe chest pain|having a seizure|severe bleeding)/i.test(latest)) {
    return NextResponse.json({ answer: 'I’m sorry you’re facing this. This chat cannot provide emergency help. Please contact local emergency services or go to the nearest emergency department now, and ask someone nearby to stay with you. Do not wait for a reply here.' }, { headers: { 'Cache-Control': 'no-store' } });
  }
  if (/(diagnos|symptom|prescri|dosage|\bdose\b|should i stop (taking )?medication|what medicine|treatment plan|medical advice)/i.test(latest)) {
    return NextResponse.json({ answer: 'I can’t assess symptoms or recommend treatment or medication. Please speak with an appropriately qualified healthcare professional who can assess the individual. I can help you contact Eleos for general information.' }, { headers: { 'Cache-Control': 'no-store' } });
  }
  if (limited(ip)) return NextResponse.json({ error: 'Please wait a moment before sending another message.' }, { status: 429 });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return NextResponse.json({ error: FALLBACK }, { status: 503 });
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        messages: [{ role: 'system', content: chatSystemPrompt }, ...messages],
        temperature: 0.2,
        max_completion_tokens: 350,
      }),
      signal: AbortSignal.timeout(18_000),
      cache: 'no-store',
    });
    if (!response.ok) return NextResponse.json({ error: FALLBACK }, { status: 502 });
    const data = await response.json();
    const answer = data?.choices?.[0]?.message?.content;
    if (typeof answer !== 'string' || !answer.trim()) return NextResponse.json({ error: FALLBACK }, { status: 502 });
    return NextResponse.json({ answer: answer.trim() }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ error: FALLBACK }, { status: 502 });
  }
}
