import Link from 'next/link';
import { Heart, Eye, HandHeart, ShieldCheck, Users } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('About Eleos','Learn about Eleos Wellness & Rehabilitation Centre in Gatitu, Thika, and the values that guide its approach.','/about/');

const values = [
  { icon: Heart, title: 'Compassion', text: 'Meet each person with warmth and understanding.' },
  { icon: ShieldCheck, title: 'Dignity', text: 'Treat every person with respect and care.' },
  { icon: Users, title: 'Connection', text: 'Recognise the value of supportive relationships.' },
  { icon: HandHeart, title: 'Hope', text: 'Make room for possibility and new beginnings.' },
];

export default function AboutPage() { return <PageLayout><PageHero label="About Eleos" title="A place for care, connection and hope." copy="Eleos Wellness & Rehabilitation Centre is based in Gatitu, Thika, Kenya. We welcome conversations from people and families seeking information about wellness and rehabilitation support." />
  <section className="section"><div className="container prose-grid"><div><p className="eyebrow">Who we are</p><h2>Compassion is at the heart of Eleos.</h2></div><div className="prose"><p>Eleos is a wellness and rehabilitation centre. Its message, “Where Healing Begins and Hope is Restored,” reflects a commitment to approach people with care and understanding.</p><p>For information about the centre’s current programmes, team and approach, please contact Eleos directly. Details will be added here as they are confirmed by the organisation.</p></div></div></section>
  <section className="section section-cream"><div className="container"><div className="section-heading"><div><p className="eyebrow">What guides us</p><h2>Values we aspire to bring to every conversation.</h2></div></div><div className="value-grid">{values.map(({icon:Icon,title,text})=><article className="value-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section"><div className="container prose-grid"><div><p className="eyebrow">Our mission and vision</p><h2>Grounded in a commitment to care.</h2></div><div className="prose"><h3>Mission</h3><p>Eleos’ mission wording is awaiting confirmation from the organisation.</p><h3>Vision</h3><p>Eleos’ vision wording is awaiting confirmation from the organisation.</p><h3>Team</h3><p>Approved staff names, roles, qualifications and photographs have not yet been supplied. No staff profiles are published until those details are confirmed.</p><Link className="text-link" href="/team">Team information <span aria-hidden="true">→</span></Link></div></div></section>
  </PageLayout>; }
