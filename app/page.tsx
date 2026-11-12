import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, ShieldCheck, Sprout, Users, MapPin, Lock, CheckCircle2, Clock } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { ReviewHighlights } from '@/components/molecules/ReviewHighlights';

const clinicalWings = [
  {
    title: 'Substance Recovery & Detox',
    tagline: 'Residential & Medical Detox',
    copy: 'Comprehensive, medically supervised detoxification and structured residential rehabilitation designed for lasting sobriety and emotional resilience.',
    icon: ShieldCheck,
  },
  {
    title: 'Mental Health & Psychotherapy',
    tagline: 'Evidence-Based Clinical Care',
    copy: 'Specialized therapeutic interventions for clinical depression, anxiety disorders, trauma, and complex psychological restoration.',
    icon: Heart,
  },
  {
    title: 'Family & Marriage Therapy',
    tagline: 'Restorative Systems Healing',
    copy: 'Dedicated counseling for couples and family systems, rebuilding communication, repairing trust, and supporting families throughout recovery.',
    icon: Users,
  },
  {
    title: 'Holistic Wellness & Reconditioning',
    tagline: 'Physical & Mindfulness Care',
    copy: 'Integrated physical restoration, nutritional guidance, stress regulation, and holistic mindfulness practices to sustain long-term vitality.',
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
          <h1>Care that sees the person. Clinical excellence that restores hope.</h1>
          <p className="hero-copy">
            Eleos provides compassionate mental health therapy, structured addiction recovery, and restorative wellness in a dignified, confidential sanctuary situated in Gatitu, Thika.
          </p>
          <div className="actions">
            <Link className="button button-brass" href="/contact">
              Book Confidential Consultation <ArrowRight size={18} />
            </Link>
            <Link className="button button-ghost" href="/services">
              Explore Clinical Programs
            </Link>
          </div>

          <div className="hero-trust-strip">
            <span className="hero-trust-item"><Lock size={15} /> 100% Confidential &amp; Dignified</span>
            <span className="hero-trust-item"><CheckCircle2 size={15} /> Multidisciplinary Clinical Care</span>
            <span className="hero-trust-item"><Clock size={15} /> Admissions Available 24/7 on Call</span>
          </div>
        </div>
        <div className="hero-note"><Heart size={17} /> Compassion begins with listening.</div>
      </section>

      <section className="section section-cream">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">Our Clinical Philosophy</p>
            <h2>Care starts with being heard, understood and respected.</h2>
          </div>
          <div>
            <p className="lead">
              Every recovery journey is unique. At Eleos, we look beyond symptoms to treat the whole person—integrating clinical psychotherapy, medical oversight, and holistic restoration to empower lasting life transformations.
            </p>
            <Link className="text-link" href="/about">
              Learn about our philosophy and standards <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Clinical &amp; Wellness Wings</p>
              <h2>Dedicated pathways to healing and restoration</h2>
            </div>
            <p>
              Structured residential, outpatient, and executive programs tailored to individual clinical needs and sustainable wellbeing.
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
                  <Link href="/services" aria-label={`Learn more about ${wing.title}`} className="tile-link">
                    Program details <ArrowRight size={16} />
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
            <p className="eyebrow eyebrow-light">Multidisciplinary Approach</p>
            <h2>Respect, evidence-based care and a clear path forward.</h2>
          </div>
          <div>
            <p>
              We combine psychiatric oversight, psychological therapy, and restorative wellness in an environment designed for deep reflection and clinical safety. Every client receives an individualized care plan developed in complete confidentiality.
            </p>
            <Link className="button button-light" href="/contact">
              Start a confidential conversation <ArrowRight size={18} />
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
            <p className="eyebrow">The Healing Environment</p>
            <h2>A peaceful sanctuary situated in Gatitu, Thika.</h2>
            <p className="body-copy">
              Located less than 1 km from Thika Town Centre, Eleos provides a secluded, restful atmosphere that allows clients to step away from daily pressures and focus wholly on renewal and recovery.
            </p>
            <p className="location-line"><MapPin size={18} /> Gatitu, Thika, Kenya</p>
            <Link className="text-link" href="/gallery">
              Explore our facility and environment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Take the First Step</p>
            <h2>Confidential guidance is a phone call or message away.</h2>
            <p>
              Whether seeking help for yourself or a loved one, our intake team will walk you through the options with sensitivity, dignity, and absolute discretion.
            </p>
          </div>
          <div className="actions">
            <a 
              className="button button-forest" 
              href="https://wa.me/254711143210?text=Hello%20Eleos%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20confidential%20consultation." 
              target="_blank" 
              rel="noreferrer"
            >
              WhatsApp Consultation <ArrowRight size={18} />
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
