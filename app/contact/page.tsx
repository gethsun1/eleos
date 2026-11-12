import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/molecules/ContactForm';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Contact Eleos','Call, WhatsApp or email Eleos Wellness & Rehabilitation Centre in Gatitu, Thika, Kenya.','/contact/');

export default function ContactPage() { return <PageLayout><PageHero label="Contact Eleos" title="A first conversation can start here." copy="Reach Eleos Wellness & Rehabilitation Centre in Gatitu, Thika. Share only what is needed for the centre to respond." />
  <section className="section"><div className="container contact-layout"><div><p className="eyebrow">Get in touch</p><h2>Choose the way that feels easiest.</h2><div className="contact-cards">
    <a href="tel:+254711143210" className="contact-card"><span className="contact-icon"><Phone/></span><span><strong>Call Eleos</strong><small>+254 711 143210</small></span></a>
    <a href="https://wa.me/254711143210" target="_blank" rel="noreferrer" className="contact-card"><span className="contact-icon"><MessageCircle/></span><span><strong>WhatsApp</strong><small>+254 711 143210</small></span></a>
    <a href="mailto:eleoswellnesscentre@gmail.com" className="contact-card"><span className="contact-icon"><Mail/></span><span><strong>Email</strong><small>eleoswellnesscentre@gmail.com</small></span></a>
    <div className="contact-card"><span className="contact-icon"><MapPin/></span><span><strong>Visit</strong><small>Gatitu, Thika, Kenya</small></span></div>
  </div><p className="muted small">Contact the centre for directions and to plan a visit.</p></div><div className="form-panel"><ContactForm/></div></div></section>
  </PageLayout>; }
