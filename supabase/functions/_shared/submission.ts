import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const corsHeaders = {
  'Access-Control-Allow-Origin': Deno.env.get('SITE_ORIGIN') || 'https://eleos.vercel.app',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
export const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
export const db = () => {
  const secretKeys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') || '{}');
  const secretKey = secretKeys.default || Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!secretKey) throw new Error('Supabase server key is not configured');
  return createClient(Deno.env.get('SUPABASE_URL')!, secretKey, { auth: { persistSession: false } });
};
export async function rateLimit(req: Request, kind: 'review'|'enquiry') {
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip') || 'unknown';
  const salt = Deno.env.get('RATE_LIMIT_SALT'); if (!salt) throw new Error('RATE_LIMIT_SALT not configured');
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}:${forwarded}`));
  const hash = [...new Uint8Array(digest)].map(byte=>byte.toString(16).padStart(2,'0')).join('');
  const {data,error}=await db().rpc('consume_submission_limit',{p_ip_hash:hash,p_submission_type:kind});
  if(error) throw new Error('Rate limit check failed');
  return data === true;
}
