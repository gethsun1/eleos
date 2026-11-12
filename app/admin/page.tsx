'use client';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import { PageLayout } from '@/components/templates/PageLayout';
import { Enquiry, isSupabaseConfigured, Review, supabase } from '@/lib/supabase';

type Session = NonNullable<Awaited<ReturnType<NonNullable<typeof supabase>['auth']['getSession']>>['data']['session']>;

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);

  const load = useCallback(async (userId: string) => {
    if (!supabase) return;
    setBusy(true);
    const { data: admin, error: adminError } = await supabase.from('eleos_admins').select('user_id').eq('user_id', userId).maybeSingle();
    if (adminError || !admin) {
      setAuthorized(false);
      setNotice('This account is not on the Eleos administrator allowlist. Ask the project owner to add your Supabase user ID.');
      setBusy(false);
      return;
    }
    setAuthorized(true);
    const [reviewResult, enquiryResult] = await Promise.all([
      supabase.from('reviews').select('*').order('created_at', { ascending: false }),
      supabase.from('enquiries').select('*').order('created_at', { ascending: false }).limit(100),
    ]);
    setBusy(false);
    if (reviewResult.error || enquiryResult.error) { setNotice('Could not load moderation records. Check the Supabase policies and connection.'); return; }
    setReviews((reviewResult.data || []) as Review[]);
    setEnquiries((enquiryResult.data || []) as Enquiry[]);
  }, []);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session as Session | null);
      if (data.session) void load(data.session.user.id);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next as Session | null);
      setAuthorized(next ? null : false);
      if (next) void load(next.user.id);
    });
    return () => subscription.unsubscribe();
  }, [load]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;
    setNotice('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setNotice('Sign-in failed. Check your credentials or contact the site administrator.');
  }

  async function moderate(id: string, status: 'approved' | 'rejected') {
    if (!supabase || !session) return;
    const { error } = await supabase.from('reviews').update({ status, moderated_at: new Date().toISOString(), moderated_by: session.user.id }).eq('id', id);
    setNotice(error ? 'The review could not be updated.' : `Review ${status}.`);
    if (!error) void load(session.user.id);
  }

  async function removeReview(id: string) {
    if (!supabase || !session) return;
    const { error } = await supabase.from('reviews').delete().eq('id', id);
    setNotice(error ? 'The review could not be removed.' : 'Review removed.');
    if (!error) void load(session.user.id);
  }

  async function updateEnquiry(id: string, status: 'reviewed' | 'closed') {
    if (!supabase || !session) return;
    const { error } = await supabase.from('enquiries').update({ status }).eq('id', id);
    setNotice(error ? 'Enquiry could not be updated.' : 'Enquiry updated.');
    if (!error) void load(session.user.id);
  }

  async function deleteEnquiry(id: string) {
    if (!supabase || !session || !window.confirm('Permanently delete this enquiry?')) return;
    const { error } = await supabase.from('enquiries').delete().eq('id', id);
    setNotice(error ? 'Enquiry could not be deleted.' : 'Enquiry deleted.');
    if (!error) void load(session.user.id);
  }

  return <PageLayout><section className="section"><div className="container admin-wrap">
    <p className="eyebrow">Private area</p><h1 className="admin-title">Review moderation</h1>
    {!isSupabaseConfigured ? <p className="notice">The moderation system is not configured yet.</p> : !session ? <form className="form-panel form-stack admin-login" onSubmit={login}>
      <h2>Administrator sign in</h2><label>Email<input type="email" autoComplete="username" value={email} onChange={event => setEmail(event.target.value)} required /></label>
      <label>Password<input type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} required /></label>
      <button className="button button-forest">Sign in</button><p aria-live="polite" className="form-message">{notice}</p>
    </form> : authorized === false ? <div className="notice">{notice}<p><button className="text-button" onClick={() => void supabase?.auth.signOut()}>Sign out</button></p></div> : authorized === null ? <p aria-live="polite">Checking administrator access…</p> : <>
      <div className="admin-toolbar"><p>Signed in as {session.user.email}</p><div><button className="text-button" onClick={() => void load(session.user.id)} disabled={busy}>Refresh</button><button className="text-button" onClick={() => void supabase?.auth.signOut()}>Sign out</button></div></div>
      <p aria-live="polite" className="form-message">{notice}</p>
      <h2>Visitor reviews</h2>{reviews.length === 0 ? <p className="empty-state">No reviews submitted yet.</p> : <div className="admin-list">{reviews.map(item => <article key={item.id} className="admin-card">
        <div className="admin-card-top"><strong>{item.rating} / 5 stars · {item.display_name || 'Anonymous'}</strong><small>{new Date(item.created_at).toLocaleString()}</small></div>
        <p>{item.review_text || 'Rating only'}</p><span className={`status-pill status-${item.status}`}>{item.status}</span>
        <div className="actions"><button className="button button-forest" onClick={() => void moderate(item.id, 'approved')}>Approve</button><button className="button button-muted" onClick={() => void moderate(item.id, 'rejected')}>Reject / unpublish</button><button className="text-button" onClick={() => void removeReview(item.id)}>Delete</button></div>
      </article>)}</div>}
      <h2>Enquiries</h2>{enquiries.length === 0 ? <p className="empty-state">No saved enquiries.</p> : <div className="admin-list">{enquiries.map(item => <article key={item.id} className="admin-card">
        <div className="admin-card-top"><strong>{item.name} · {item.category}</strong><small>{new Date(item.created_at).toLocaleString()}</small></div>
        <p><a href={`mailto:${item.email}`}>{item.email}</a>{item.phone && <> · <a href={`tel:${item.phone}`}>{item.phone}</a></>}</p><p className="admin-message">{item.message}</p>
        <span className={`status-pill status-${item.status}`}>{item.status}</span><div className="actions"><button className="button button-muted" onClick={() => void updateEnquiry(item.id, 'reviewed')}>Mark reviewed</button><button className="button button-muted" onClick={() => void updateEnquiry(item.id, 'closed')}>Close</button><button className="text-button" onClick={() => void deleteEnquiry(item.id)}>Delete</button></div>
      </article>)}</div>}
    </>}
  </div></section></PageLayout>;
}
