'use client';
import { FormEvent, useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { isSupabaseConfigured, Review, ReviewSummary, supabase } from '@/lib/supabase';

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [anonymous, setAnonymous] = useState(true);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [loadStatus, setLoadStatus] = useState<'loading'|'ready'|'unavailable'>('loading');
  const [summary,setSummary]=useState<ReviewSummary>({average_rating:0,review_count:0});
  useEffect(() => { if (!supabase) { setLoadStatus('unavailable'); return; } Promise.all([supabase.from('reviews').select('id,display_name,rating,review_text,created_at,status').eq('status','approved').order('created_at',{ascending:false}).limit(12),supabase.rpc('get_review_summary')]).then(([list,aggregate])=>{if(list.error||aggregate.error)setLoadStatus('unavailable');else{setReviews((list.data || []) as Review[]);setSummary(aggregate.data as ReviewSummary);setLoadStatus('ready')}}); }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus(''); const form=event.currentTarget; const data=new FormData(form); if (String(data.get('website')||'')) return;
    if (!supabase || !rating) { setStatus(!rating ? 'Choose a star rating to continue.' : 'Review submissions are not available yet.'); return; }
    const text=String(data.get('review_text')||'').trim(); const displayName=anonymous ? null : String(data.get('display_name')||'').trim() || null;
    if(text.length>1200) { setStatus('Please keep your review under 1,200 characters.'); return; }
    setBusy(true); const {error}=await supabase.functions.invoke('submit-review',{body:{rating,review_text:text||null,display_name:displayName,website:String(data.get('website')||'')}}); setBusy(false);
    if(error) { setStatus('We could not save your review. Please try again later.'); return; }
    form.reset(); setRating(0); setAnonymous(true); setStatus('Thank you. Your review has been received and will be checked before it can appear publicly.');
  }
  const average=summary.average_rating;
  return <div className="reviews-layout"><div className="review-list-panel"><div className="rating-summary"><strong>{loadStatus==='ready'&&summary.review_count ? average.toFixed(1) : '—'}</strong><div><div className="stars" aria-label={summary.review_count ? `${average.toFixed(1)} average from ${summary.review_count} published reviews` : 'No published reviews yet'}>{[1,2,3,4,5].map(n=><Star key={n} size={18} fill={n<=Math.round(average)?'currentColor':'none'}/>)}</div><span>{loadStatus==='loading'?'Loading published reviews…':loadStatus==='unavailable'?'Published feedback is unavailable right now.':summary.review_count ? `${summary.review_count} published ${summary.review_count===1?'review':'reviews'}` : 'No published reviews yet'}</span></div></div>
    {loadStatus==='unavailable' ? <p className="empty-state">Try again later or contact Eleos directly.</p> : reviews.length ? <div className="review-cards">{reviews.map(item=><article className="review-card" key={item.id}><div className="stars" aria-label={`${item.rating} out of 5 stars`}>{[1,2,3,4,5].map(n=><Star key={n} size={16} fill={n<=item.rating?'currentColor':'none'}/>)}</div>{item.review_text&&<p>“{item.review_text}”</p>}<small>{item.display_name || 'Anonymous visitor'}</small></article>)}</div> : loadStatus==='ready' ? <p className="empty-state">Approved visitor ratings will appear here. No reviews have been published yet.</p> : null}
  </div><form onSubmit={submit} className="form-stack form-panel"><div><p className="eyebrow">Share feedback</p><h2>Your experience matters.</h2><p className="muted small">Please do not include diagnoses, treatment details or confidential health information.</p></div>
    <fieldset className="rating-picker"><legend>Your rating</legend><div>{[1,2,3,4,5].map(n=><button key={n} type="button" className={`star-button ${rating>=n?'selected':''}`} aria-label={`${n} star${n>1?'s':''}`} aria-pressed={rating===n} onClick={()=>setRating(n)}><Star fill={rating>=n?'currentColor':'none'}/></button>)}</div></fieldset>
    <label className="check-row"><input type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)}/> Submit anonymously</label>
    {!anonymous&&<label>Display name <span className="muted">(optional)</span><input name="display_name" maxLength={80} placeholder="Name to show with your review"/></label>}
    <label>Written review <span className="muted">(optional)</span><textarea name="review_text" rows={4} maxLength={1200} placeholder="Share general feedback without private health details."/></label>
    <label className="consent"><input required type="checkbox"/><span>I understand my feedback is stored for moderation. If approved, it may be displayed on this website with my chosen display name. See the <a href="/privacy-policy/">Privacy Policy</a>.</span></label>
    <label className="honeypot" aria-hidden="true">Leave this field empty<input tabIndex={-1} autoComplete="off" name="website"/></label>
    <button className="button button-forest" disabled={busy}>{busy?'Submitting…':'Submit for review'}</button>{!isSupabaseConfigured&&<p className="small muted">Review submissions will be enabled after backend setup.</p>}<p aria-live="polite" className="form-message">{status}</p>
  </form></div>;
}
