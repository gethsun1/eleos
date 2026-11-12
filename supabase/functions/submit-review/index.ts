import { corsHeaders, db, json, rateLimit } from '../_shared/submission.ts';
Deno.serve(async req=>{
  if(req.method==='OPTIONS') return new Response('ok',{headers:corsHeaders});
  if(req.method!=='POST') return json({error:'Method not allowed'},405);
  try {
    const body=await req.json();
    if(typeof body.website==='string'&&body.website.trim()) return json({ok:true});
    const rating=Number(body.rating), text=typeof body.review_text==='string'?body.review_text.trim():null, name=typeof body.display_name==='string'?body.display_name.trim():null;
    if(!Number.isInteger(rating)||rating<1||rating>5|| (text&&text.length>1200)||(name&&name.length>80)) return json({error:'Invalid review'},400);
    if(!(await rateLimit(req,'review'))) return json({error:'Please wait before submitting another review.'},429);
    const {error}=await db().from('reviews').insert({rating,review_text:text||null,display_name:name||null,status:'pending'});
    if(error) throw error;
    return json({ok:true},201);
  } catch(error) { console.error('review submission failed',error); return json({error:'Review could not be saved'},500); }
});
