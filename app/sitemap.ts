import type { MetadataRoute } from 'next';
export const dynamic='force-static';
const base='https://eleos.vercel.app';
export default function sitemap():MetadataRoute.Sitemap{return ['','about','our-story','services','team','gallery','reviews','contact','privacy-policy','terms'].map(path=>({url:path?`${base}/${path}/`:`${base}/`,changeFrequency:path?'monthly':'weekly',priority:path===''?1:.6}))}
