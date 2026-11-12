import Link from 'next/link';
import { Heart, ShieldCheck, Users, Sprout, Building2, Compass, HandHeart } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Service Areas','Enquire about wellness and rehabilitation support areas at Eleos in Gatitu, Thika. Please confirm current availability.','/services/');

const services = [
  { icon: Heart, title: 'Mental health support', body: 'Ask about mental health support and the options currently available at Eleos.' },
  { icon: ShieldCheck, title: 'Addiction recovery', body: 'Enquire about recovery support and the right way to begin a conversation.' },
  { icon: Users, title: 'Family and marriage therapy', body: 'Ask whether support for couples, relationships or families is currently offered.' },
  { icon: Sprout, title: 'Wellness programmes', body: 'Contact the centre for details about wellness activities and programmes.' },
  { icon: Building2, title: 'Corporate wellness', body: 'Enquire about wellness support for workplaces and organisations.' },
  { icon: Compass, title: 'Therapeutic retreats', body: 'Ask Eleos whether retreats or related programmes are currently available.' },
  { icon: HandHeart, title: 'Community outreach', body: 'Contact the centre for information about community engagement.' },
];

export default function ServicesPage() { return <PageLayout><PageHero label="Service areas" title="Find out what support may be available." copy="These areas appeared in earlier Eleos website material. Current availability and programme details must be confirmed directly with the centre." />
  <section className="section"><div className="container"><div className="notice"><strong>Please confirm availability.</strong> This page does not promise that each listed service is currently offered.</div><div className="service-list">{services.map(({icon:Icon,title,body},index)=><article className="service-row" key={title}><div className="service-icon"><Icon/></div><div><span className="eyebrow">Area {String(index+1).padStart(2,'0')}</span><h2>{title}</h2><p>{body}</p></div><Link className="text-link" href={`/contact?category=${encodeURIComponent(title)}`}>Ask Eleos <span aria-hidden="true">→</span></Link></article>)}</div></div></section>
  <section className="section section-cream"><div className="container cta-panel"><div><p className="eyebrow">Have a question?</p><h2>Talk to the centre about your needs.</h2><p>Please avoid including private medical details in an initial online enquiry.</p></div><Link className="button button-forest" href="/contact">Contact Eleos <span aria-hidden="true">→</span></Link></div></section>
  </PageLayout>; }
