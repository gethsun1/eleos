import Link from 'next/link';
import { ArrowRight, Heart, ShieldCheck, Sprout, MessageCircle, MapPin } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { ReviewHighlights } from '@/components/molecules/ReviewHighlights';

const serviceAreas = [
  ['Wellness programmes', 'Explore wellbeing support and ask the Eleos team what is currently available.'],
  ['Addiction recovery', 'Contact Eleos to discuss recovery support and the options that may be appropriate.'],
  ['Mental health support', 'Ask about mental health support and how to take a first step.'],
  ['Family and marriage therapy', 'Enquire about support for families, couples and relationships.'],
];

export default function HomePage() {
  return <PageLayout>
    <section className="hero">
      <div className="hero-art" aria-hidden="true"><span className="hero-orbit orbit-one"/><span className="hero-orbit orbit-two"/><span className="hero-sun"/></div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow eyebrow-light">Eleos Wellness & Rehabilitation Centre · Gatitu, Thika</p>
        <h1>Where Healing Begins and Hope is Restored.</h1>
        <p className="hero-copy">A welcoming place to begin a conversation about wellness and rehabilitation. Reach out to learn more about the support Eleos may offer.</p>
        <div className="actions"><Link className="button button-brass" href="/contact">Contact Eleos <ArrowRight size={18}/></Link><Link className="button button-ghost" href="/services">Explore service areas</Link></div>
      </div>
      <div className="hero-note"><Heart size={17}/> Compassion begins with listening.</div>
    </section>

    <section className="section section-cream"><div className="container intro-grid">
      <div><p className="eyebrow">A first conversation</p><h2>Care starts with being heard.</h2></div>
      <div><p className="lead">Every person’s circumstances are different. Eleos welcomes enquiries from individuals and families looking for information about wellness and rehabilitation support.</p><Link className="text-link" href="/about">Learn about Eleos <ArrowRight size={16}/></Link></div>
    </div></section>

    <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">How we may help</p><h2>Areas to ask us about</h2></div><p>Availability and programme details can change. Please contact Eleos to confirm current services.</p></div>
      <div className="service-grid">{serviceAreas.map(([title, copy], i) => <article className="service-tile" key={title}><span className="tile-index">0{i+1}</span><div className="service-icon">{i===0?<Sprout/>:i===1?<ShieldCheck/>:i===2?<Heart/>:<MessageCircle/>}</div><h3>{title}</h3><p>{copy}</p><Link href="/services" aria-label={`Ask about ${title}`} className="tile-link">Enquire <ArrowRight size={16}/></Link></article>)}</div>
    </div></section>

    <section className="section section-forest"><div className="container approach-grid"><div><p className="eyebrow eyebrow-light">Our approach</p><h2>Respect, compassion and a thoughtful next step.</h2></div><div><p>We believe people deserve to be met with kindness and dignity. If you are considering reaching out, our team can help you understand the next step and answer questions about available support.</p><Link className="button button-light" href="/contact">Start a conversation <ArrowRight size={18}/></Link></div></div></section>

    <ReviewHighlights />

    <section className="section"><div className="container photo-contact"><div className="brand-story-art" aria-hidden="true"><span className="brand-art-orbit"/><span className="brand-art-sun"/><span className="brand-art-word">eleos</span><span className="brand-art-caption">GATITU · THIKA</span></div><div><p className="eyebrow">A welcoming environment</p><h2>Take time to find out if Eleos is right for you.</h2><p className="body-copy">Contact the centre to ask about its location, current service areas and how to arrange an initial conversation.</p><p className="location-line"><MapPin size={18}/> Gatitu, Thika, Kenya</p><Link className="text-link" href="/gallery">Gallery information <ArrowRight size={16}/></Link></div></div></section>

    <section className="section section-cream"><div className="container cta-panel"><div><p className="eyebrow">Whenever you are ready</p><h2>A simple first step is reaching out.</h2><p>Call, email or send a WhatsApp message to the Eleos team.</p></div><div className="actions"><a className="button button-forest" href="https://wa.me/254711143210" target="_blank" rel="noreferrer">WhatsApp Eleos <ArrowRight size={18}/></a><Link className="text-link" href="/contact">More contact options <ArrowRight size={16}/></Link></div></div></section>
  </PageLayout>;
}
