import { corsHeaders, db, json, rateLimit } from '../_shared/submission.ts';
const categories=['General information','Services and programmes','Family enquiry','Visit to the centre','Other'];
Deno.serve(async req=>{
  if(req.method==='OPTIONS') return new Response('ok',{headers:corsHeaders});
  if(req.method!=='POST') return json({error:'Method not allowed'},405);
  try {
    const body=await req.json();
    if(typeof body.website==='string'&&body.website.trim()) return json({ok:true});
    const row={name:String(body.name||'').trim(),email:String(body.email||'').trim(),phone:String(body.phone||'').trim()||null,category:String(body.category||''),message:String(body.message||'').trim()};
    if(row.name.length<1||row.name.length>100||row.email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)||(row.phone&&row.phone.length>32)||!categories.includes(row.category)||row.message.length<10||row.message.length>2000) return json({error:'Invalid enquiry'},400);
    if(!(await rateLimit(req,'enquiry'))) return json({error:'Please wait before submitting another enquiry.'},429);
    const {error}=await db().from('enquiries').insert(row);
    if(error) throw error;
    return json({ok:true},201);
  } catch(error) { console.error('enquiry submission failed',error); return json({error:'Enquiry could not be saved'},500); }
});
