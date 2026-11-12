import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-inverse">
            <Image className="brand-logo" src="/eleos-logo.jpeg" alt="Eleos Logo" width={52} height={52} />
            <span><strong>eleos</strong><small>WELLNESS &amp; REHABILITATION</small></span>
          </Link>
          <p>Where Healing Begins and Hope is Restored.</p>
          <p className="footer-location"><MapPin size={15} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} /> Gatitu, Thika, Kenya · Near Thika Town Centre</p>
          
          <div className="footer-social-block">
            <span className="footer-social-heading">Official Corporate Presence</span>
            <a
              href="https://www.linkedin.com/company/eleos-wellness-rehabilitation-centre/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Eleos Wellness &amp; Rehabilitation Centre on LinkedIn"
            >
              <Linkedin size={18} />
              <span>Eleos on LinkedIn</span>
            </a>
          </div>
        </div>

        <div>
          <h2>Clinical Care</h2>
          <Link href="/services">Substance Recovery &amp; Detox</Link>
          <Link href="/services">Mental Health &amp; Psychotherapy</Link>
          <Link href="/services">Family &amp; Marriage Therapy</Link>
          <Link href="/services">Executive &amp; Corporate Wellness</Link>
          <Link href="/services">Therapeutic Retreats</Link>
          <Link href="/team">Multidisciplinary Team</Link>
          <Link href="/gallery">Facility &amp; Environment</Link>
        </div>

        <div>
          <h2>Admissions &amp; Contact</h2>
          <a href="tel:+254711143210" className="footer-highlight-link"><Phone size={15} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} /> +254 711 143210</a>
          <a href="https://wa.me/254711143210?text=Hello%20Eleos%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20confidential%20consultation." target="_blank" rel="noreferrer">WhatsApp Consultation ↗</a>
          <a href="mailto:eleoswellnesscentre@gmail.com"><Mail size={15} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} /> eleoswellnesscentre@gmail.com</a>
          <div className="footer-hours">
            <span className="footer-hours-title"><Clock size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '5px' }} /> Hours of Service</span>
            <span>Mon–Fri: 8:00 AM – 6:00 PM</span>
            <span>Saturday: 9:00 AM – 3:00 PM</span>
            <span className="footer-urgent">Admissions on call 24/7</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Eleos Wellness &amp; Rehabilitation Centre. All rights reserved.</span>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
