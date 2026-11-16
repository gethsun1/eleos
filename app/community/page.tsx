import { ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Community & Wellness', 'Explore Eleos community wellness and physical activity engagement.', '/community/');

export default function CommunityPage() { return <PageLayout>
  <PageHero label="Community & wellness" title="Wellness beyond the clinic." copy="Health is shaped by everyday choices, supportive communities and the commitment to care for our physical and mental wellbeing." />
  <section className="section"><div className="container community-feature">
    <div className="community-copy"><p className="eyebrow">Moving together</p><h2>Making room for connection, movement and wellbeing.</h2><p>Through community engagement and wellness initiatives, Eleos recognises the importance of creating opportunities for people to move, connect and support one another.</p><p className="small muted">The featured video was supplied by Eleos and described as a walk in Karen, Nairobi. Its caption also references BA Challenge and a Weekly Fitness Clinic at Arboretum Park. Those references are presented separately; no date or current event schedule is asserted here.</p><a className="text-link" href="https://youtube.com/shorts/DA9kvjP1ni8" target="_blank" rel="noopener noreferrer">View the original on YouTube <ExternalLink size={15}/></a></div>
    <div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/DA9kvjP1ni8" title="Eleos community wellness walk video supplied by Eleos" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
  </div></section>
  <section className="section section-cream"><div className="container community-note"><p className="eyebrow">A shared practice</p><h2>Fitness is about living well, together.</h2><p>Small, sustainable choices can support wellbeing. The video invites viewers to move, build healthy routines and encourage one another. Contact Eleos for information about current community initiatives.</p></div></section>
 </PageLayout>; }
