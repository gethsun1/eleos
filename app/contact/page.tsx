import { Mail, MapPin, MessageCircle, Phone, Clock, ShieldCheck } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/molecules/ContactForm';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Contact Admissions & Consultations',
  'Reach Eleos Wellness & Rehabilitation Centre in Gatitu, Thika, Kenya. Call, WhatsApp or send a confidential inquiry.',
  '/contact/'
);

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero 
        label="Admissions &amp; Consultations" 
        title="We are here to help you take the first step." 
        copy="Reach Eleos Wellness & Rehabilitation Centre in Gatitu, Thika. Connect with our compassionate admissions team in complete confidence." 
      />

      <section className="section">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2>Choose the communication channel that suits you best.</h2>
            
            <div className="contact-cards">
              <a href="tel:+254711143210" className="contact-card">
                <span className="contact-icon"><Phone /></span>
                <span>
                  <strong>Call Admissions Directly</strong>
                  <small>+254 711 143210</small>
                </span>
              </a>
              
              <a 
                href="https://wa.me/254711143210?text=Hello%20Eleos%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20confidential%20consultation." 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card"
              >
                <span className="contact-icon"><MessageCircle /></span>
                <span>
                  <strong>WhatsApp Consultation</strong>
                  <small>Instant confidential chat (+254 711 143210)</small>
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

            <div className="contact-hours-card">
              <div className="flex items-center gap-2 mb-2 font-bold text-forest">
                <Clock size={18} className="text-brass" />
                <span>Operating &amp; Consultation Hours</span>
              </div>
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Monday – Friday:</strong> 8:00 AM – 6:00 PM</li>
                <li><strong>Saturday:</strong> 9:00 AM – 3:00 PM</li>
                <li><strong>Sunday:</strong> Closed for outpatient visits</li>
                <li className="text-forest font-semibold pt-1"><strong>Inpatient &amp; Urgent Admissions:</strong> Available 24/7 on call</li>
              </ul>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted mt-4">
              <ShieldCheck size={16} className="text-forest flex-none" />
              <span>All consultations and inquiries are treated with strict confidentiality.</span>
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
