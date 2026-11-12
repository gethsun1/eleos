import Link from 'next/link';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('About Eleos','Learn about Eleos Wellness & Rehabilitation Centre in Gatitu, Thika, and the values that guide its approach.','/about/');

const values = [
  { title: 'Compassion', text: 'We begin by listening, meeting each person with patience, empathy and an open mind.' },
  { title: 'Dignity', text: 'Every person deserves to be seen beyond their circumstances and treated with respect.' },
  { title: 'Connection', text: 'We recognise the strength found in supportive relationships, shared understanding and community.' },
  { title: 'Hope', text: 'We believe that change can begin with one conversation, one decision and one supported step forward.' },
];

export default function AboutPage() { return <PageLayout><PageHero label="About Eleos" title="A place for care, connection and hope." copy="Eleos Wellness & Rehabilitation Centre is based in Gatitu, Thika, Kenya. We welcome conversations from people and families seeking information about wellness and rehabilitation support." />
  <section className="section"><div className="container prose-grid"><div><p className="eyebrow">Who we are</p><h2>Compassion is at the heart of Eleos.</h2></div><div className="prose"><p>Eleos Wellness & Rehabilitation Centre welcomes individuals and families seeking information about wellness and rehabilitation support in Gatitu, Thika.</p><p>Every person arrives with a story that deserves to be heard. People should never be reduced to the challenges they face; they deserve understanding, respect and the opportunity to take their next steps with support.</p></div></div></section>
  <section className="section section-cream"><div className="container values-layout"><div className="values-intro"><p className="eyebrow">What guides us</p><h2>Care shaped by compassion, dignity, connection and hope.</h2></div><div className="values-editorial">{values.map(({title,text},index)=><article className="value-entry" key={title}><span className="value-number">0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section"><div className="container prose-grid"><div><p className="eyebrow">Our mission and vision</p><h2>A direction for the care we seek to offer.</h2></div><div className="prose"><h3>Mission</h3><p>To create a welcoming and respectful environment where individuals and families can access thoughtful wellness and rehabilitation support, rediscover their strengths and take meaningful steps towards healthier lives.</p><h3>Vision</h3><p>A community where every person can seek support without stigma, experience care with dignity and find the opportunity to grow, recover and flourish.</p><Link className="text-link" href="/our-story">Read our story <span aria-hidden="true">→</span></Link></div></div></section>
  </PageLayout>; }
