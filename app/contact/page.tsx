import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/molecules/ContactForm';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Contact Eleos',
  'Reach Eleos Wellness & Rehabilitation Centre in Gatitu, Thika, Kenya. Call, WhatsApp or send an enquiry.',
  '/contact/'
);

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eleos Wellness & Rehabilitation Centre',
    email: 'eleoswellnesscentre@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254721877272',
      contactType: 'enquiries',
      availableLanguage: ['English'],
    },
  };
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <PageHero 
        label="Contact Eleos"
        title="We are here to help you take the first step." 
        copy="Reach Eleos Wellness & Rehabilitation Centre in Gatitu, Thika by phone, WhatsApp, email or online enquiry."
      />

      <section className="section">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2>Choose the communication channel that suits you best.</h2>
            
            <div className="contact-cards">
              <a href="tel:+254721877272" className="contact-card">
                <span className="contact-icon"><Phone /></span>
                <span>
                <strong>Call Eleos</strong>
                <small>+254 721 877272</small>
                </span>
              </a>
              
              <a 
                href="https://wa.me/254711143210?text=Hello%20Eleos%2C%20I%20would%20like%20information%20about%20your%20services."
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card"
              >
                <span className="contact-icon"><MessageCircle /></span>
                <span>
                  <strong>WhatsApp Eleos</strong>
                  <small>+254 711 143210</small>
                </span>
              </a>
              
              <a href="mailto:eleoswellnesscentre@gmail.com" className="contact-card">
                <span className="contact-icon"><Mail /></span>
                <span>
                  <strong>Email Inquiries</strong>
                  <small>eleoswellnesscentre@gmail.com</small>
                </span>
              </a>
              
              <div className="contact-card">
                <span className="contact-icon"><MapPin /></span>
                <span>
                  <strong>Physical Location</strong>
                  <small>Gatitu, Thika, Kenya (Near Thika Town Centre)</small>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted mt-4">
              <ShieldCheck size={16} className="text-forest flex-none" />
              <span>Please avoid sharing sensitive health details through general enquiries.</span>
            </div>
          </div>

          <div className="form-panel">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
