'use client';

import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };
const welcome = 'Welcome to Eleos Wellness & Rehabilitation Centre. I am the Eleos Virtual Assistant. I can help you explore our services, training programmes and enquiry options. How may I assist you?';
const prompts = ['Explore rehabilitation services', 'Find a training course', 'Learn about caregiving preparation', 'Ask about VIP rehabilitation', 'Contact Eleos'];

export function EleosChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: welcome }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const feed = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const closeChat = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  useEffect(() => { if (feed.current) feed.current.scrollTop = feed.current.scrollHeight; }, [messages, busy]);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) closeChat();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, closeChat]);

  async function send(raw: string) {
    const content = raw.trim();
    if (!content || busy) return;
    const next = [...messages, { role: 'user' as const, content }];
    setMessages(next); setInput(''); setBusy(true);
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: next.slice(-10) }) });
      const data = await response.json();
      setMessages(current => [...current, { role: 'assistant', content: data.answer || data.error || 'Please contact Eleos directly for assistance.' }]);
    } catch {
      setMessages(current => [...current, { role: 'assistant', content: 'I’m temporarily unable to answer through the virtual assistant. Please contact Eleos directly by phone or WhatsApp, and the team will assist you.' }]);
    } finally { setBusy(false); }
  }

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); void send(input); }

  return <div className="chatbot-root">
    {open && <section className="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-title">
      <header className="chat-header"><div><span className="chat-eyebrow">Eleos Wellness</span><h2 id="chat-title">Virtual Assistant</h2></div><button type="button" className="chat-close" onClick={closeChat} aria-label="Close chat"><X size={19}/></button></header>
      <div className="chat-privacy">For general information only. Please do not share detailed medical or sensitive personal information.</div>
      <div className="chat-messages" ref={feed} aria-live="polite" aria-relevant="additions text">
        {messages.map((message, index) => <p key={`${index}-${message.role}`} className={`chat-bubble ${message.role}`}>{message.content}</p>)}
        {busy && <p className="chat-bubble assistant chat-typing" aria-label="Assistant is responding">Thinking…</p>}
        {messages.length === 1 && <div className="chat-prompts">{prompts.map(prompt => <button key={prompt} type="button" onClick={() => void send(prompt)}>{prompt}</button>)}</div>}
      </div>
      <div className="chat-handoff"><a href="tel:+254721877272"><Phone size={14}/> Call</a><a href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer"><MessageCircle size={14}/> WhatsApp</a><a href="mailto:eleoswellnesscentre@gmail.com"><Mail size={14}/> Email</a></div>
      <form className="chat-compose" onSubmit={submit}><label className="sr-only" htmlFor="chat-input">Your message</label><input id="chat-input" ref={inputRef} value={input} onChange={event => setInput(event.target.value)} maxLength={1200} placeholder="Write your question…" disabled={busy}/><button type="submit" aria-label="Send message" disabled={busy || !input.trim()}><Send size={17}/></button></form>
    </section>}
    <button ref={launcherRef} type="button" className="chat-launcher" aria-expanded={open} onClick={() => setOpen(value => !value)} aria-label={open ? 'Close Eleos Virtual Assistant' : 'Open Eleos Virtual Assistant'}>{open ? <X size={21}/> : <><MessageCircle size={20}/><span>Ask Eleos</span></>}</button>
  </div>;
}
