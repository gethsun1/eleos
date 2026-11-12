'use client';
import { FormEvent, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setMessage('');
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get('website') || '').trim()) return;
    if (!isSupabaseConfigured || !supabase) { setMessage('The online enquiry form is not available yet. Please call, email or WhatsApp Eleos using the contact details on this page.'); return; }
    setBusy(true);
    const values = { name: String(data.get('name') || '').trim(), email: String(data.get('email') || '').trim(), phone: String(data.get('phone') || '').trim() || null, category: String(data.get('category') || ''), message: String(data.get('message') || '').trim() };
    if (values.name.length > 100 || values.email.length > 254 || (values.phone?.length || 0) > 32 || values.message.length < 10 || values.message.length > 2000) { setMessage('Please check the form. Your message must be between 10 and 2,000 characters.'); setBusy(false); return; }
    const { error } = await supabase.functions.invoke('submit-enquiry', { body: { ...values, website: String(data.get('website') || '') } });
    setBusy(false);
    if (error) { setMessage('We could not save your enquiry. Please contact Eleos by phone, WhatsApp or email instead.'); return; }
    form.reset(); setMessage('Your enquiry was saved for the Eleos team. Please use WhatsApp or call if you need a faster response.');
  }
  return <form onSubmit={submit} className="form-stack">
    <div><p className="eyebrow">Online enquiry</p><h2>Send a message</h2><p className="muted small">This form is for general enquiries only. Please do not include diagnoses, treatment histories or other confidential health details. It is not an emergency service.</p></div>
    <label>Name<input name="name" autoComplete="name" required maxLength={100}/></label>
    <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
    <label>Telephone <span className="muted">(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={32}/></label>
    <label>What is your enquiry about?<select name="category" required defaultValue=""><option value="" disabled>Select a topic</option><option>General information</option><option>Services and programmes</option><option>Family enquiry</option><option>Visit to the centre</option><option>Other</option></select></label>
    <label>Message<textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Share a little about what information you are looking for."/></label>
    <label className="consent"><input type="checkbox" required/> <span>I understand this enquiry will be stored so Eleos can respond. See the <a href="/privacy-policy/">Privacy Policy</a>.</span></label>
    <label className="honeypot" aria-hidden="true">Leave this field empty<input tabIndex={-1} autoComplete="off" name="website"/></label>
    <button className="button button-forest" disabled={busy}>{busy ? 'Saving…' : 'Send enquiry'}</button>
    <p aria-live="polite" className="form-message">{message}</p>
  </form>;
}
