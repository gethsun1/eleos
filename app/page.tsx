import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, ShieldCheck, Sprout, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { ReviewHighlights } from '@/components/molecules/ReviewHighlights';

const clinicalWings = [
  {
    title: 'Rehabilitation',
    tagline: 'Explore support options',
    copy: 'Contact Eleos to ask about rehabilitation support, current availability and what may be appropriate for an individual.',
    icon: ShieldCheck,
  },
  {
    title: 'Elderly Care & Wellness',
    tagline: 'Person-centred enquiries',
    copy: 'Ask the Eleos team about elderly physiotherapy, chiropractic services or dementia support, including individual suitability.',
    icon: Heart,
  },
  {
    title: 'Training & Education',
    tagline: 'Courses and student learning',
    copy: 'Explore professional short-course topics, caregiving preparation and student placement enquiries.',
    icon: Users,
  },
  {
    title: 'Community & Wellness',
    tagline: 'Wellness beyond the clinic',
    copy: 'Learn about community engagement and everyday opportunities to move, connect and support one another.',
    icon: Sprout,
  },
];

export default function HomePage() {
  return (
    <PageLayout>
      <section className="hero">
        <div className="hero-cover">
          <Image 
            src="/eleos_wellness_rehabilitation_centre_cover.jpeg" 
            alt="Eleos Wellness & Rehabilitation Centre entrance in Gatitu, Thika" 
            width={1128} 
            height={191} 
            priority 
            sizes="100vw" 
          />
        </div>
        <div className="container hero-content">
          <p className="eyebrow eyebrow-light">Eleos Wellness &amp; Rehabilitation Centre · Gatitu, Thika</p>
          <h1>Care that sees the person. A considered path forward.</h1>
          <p className="hero-copy">
            Explore rehabilitation, wellness and learning enquiries at Eleos Wellness & Rehabilitation Centre in Gatitu, Thika.
          </p>
          <div className="actions">
            <Link className="button button-brass" href="/contact">
              Contact Eleos <ArrowRight size={18} />
            </Link>
            <Link className="button button-ghost" href="/services">
              Explore services
            </Link>
          </div>

          <div className="hero-trust-strip">
            <span className="hero-trust-item"><MapPin size={15} /> Gatitu, Thika, Kenya</span>
            <span className="hero-trust-item"><CheckCircle2 size={15} /> Speak with Eleos directly</span>
          </div>
        </div>
        <div className="hero-note"><Heart size={17} /> Compassion begins with listening.</div>
      </section>

      <section className="section section-cream">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">About Eleos</p>
            <h2>Find the information and contact route you need.</h2>
          </div>
          <div>
            <p className="lead">
              If you are exploring a service, course or student opportunity, contact Eleos to confirm current availability, suitability and details.
            </p>
            <Link className="text-link" href="/about">
              Read the Eleos story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explore Eleos</p>
              <h2>Start with the area you want to learn about.</h2>
            </div>
            <p>
              Each page explains what information is available and how to ask Eleos for confirmed details.
            </p>
          </div>
          <div className="service-grid">
            {clinicalWings.map((wing, i) => {
              const Icon = wing.icon;
              return (
                <article className="service-tile" key={wing.title}>
                  <span className="tile-index">0{i + 1}</span>
                  <div className="service-icon"><Icon /></div>
                  <span className="tile-subheading">{wing.tagline}</span>
                  <h3>{wing.title}</h3>
                  <p>{wing.copy}</p>
                  <Link href={wing.title === 'Training & Education' ? '/training' : wing.title === 'Community & Wellness' ? '/community' : '/services'} aria-label={`Learn more about ${wing.title}`} className="tile-link">
                    Explore details <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow eyebrow-light">Human-centred communication</p>
            <h2>Start with a conversation about what is available.</h2>
          </div>
          <div>
            <p>
              Contact Eleos directly to discuss your question and confirm service information, eligibility and next steps.
            </p>
            <Link className="button button-light" href="/contact">
              Send an enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <ReviewHighlights />

      <section className="section">
        <div className="container photo-contact">
          <div className="location-map-frame">
            <iframe 
              title="Map showing Eleos Wellness & Rehabilitation Centre at Gatitu Stage, Thika" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4285.227165258969!2d37.06592719678956!3d-1.043272400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f5e82aad123%3A0xf6dbe02504fccbac!2sGATITU%20STAGE!5e1!3m2!1sen!2ske!4v1794450439141!5m2!1sen!2ske" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin" 
            />
          </div>
          <div>
            <p className="eyebrow">Find Eleos</p>
            <h2>Based in Gatitu, Thika.</h2>
            <p className="body-copy">
              Contact the team before visiting to confirm the location and any arrangements.
            </p>
            <p className="location-line"><MapPin size={18} /> Gatitu, Thika, Kenya</p>
            <Link className="text-link" href="/gallery">
              View the gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Contact Eleos</p>
            <h2>Choose the contact option that works for you.</h2>
            <p>
              Use the contact page to choose a phone call, WhatsApp, email or online enquiry.
            </p>
          </div>
          <div className="actions">
            <a 
              className="button button-forest" 
              href="https://wa.me/254711143210?text=Hello%20Eleos%2C%20I%20would%20like%20information%20about%20your%20services."
              target="_blank" 
              rel="noopener noreferrer"
            >
              WhatsApp Eleos <ArrowRight size={18} />
            </a>
            <Link className="text-link" href="/contact">
              All contact and admissions options <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
