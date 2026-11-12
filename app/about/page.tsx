import Link from 'next/link';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';
import { ArrowRight, ShieldCheck, Heart, Users, Sparkles } from 'lucide-react';

export const metadata = pageMetadata(
  'About Eleos',
  'Learn about Eleos Wellness & Rehabilitation Centre in Gatitu, Thika, our clinical philosophy, mission, vision, and core values.',
  '/about/'
);

const values = [
  { 
    title: 'Clinical Compassion', 
    text: 'We meet every individual with deep empathy, patient understanding, and non-judgmental clinical support from their first step forward.',
    icon: Heart,
  },
  { 
    title: 'Inherent Dignity', 
    text: 'Every person holds immense worth beyond the challenges they face. We treat each client with the utmost respect, honor, and absolute discretion.',
    icon: ShieldCheck,
  },
  { 
    title: 'Restorative Connection', 
    text: 'Lasting recovery is built on meaningful relationships, empathetic community, and the restoration of fractured family bonds.',
    icon: Users,
  },
  { 
    title: 'Enduring Hope', 
    text: 'We hold an unwavering belief in human transformation. Healing begins with a single conversation, leading to sustainable recovery and renewal.',
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero 
        label="About Eleos" 
        title="A premier sanctuary for healing, clinical dignity and restored hope." 
        copy="Eleos Wellness & Rehabilitation Centre in Gatitu, Thika provides comprehensive, multidisciplinary care for individuals and families seeking recovery from addiction, mental health challenges, and emotional trauma." 
      />

      <section className="section">
        <div className="container prose-grid">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2>Healing begins where compassion meets clinical excellence.</h2>
          </div>
          <div className="prose">
            <p>
              Eleos Wellness &amp; Rehabilitation Centre was established as a dedicated sanctuary for transformation in Gatitu, Thika, located less than 1 km from Thika Town Centre. We serve individuals, families, and organizations navigating the complexities of substance use disorders, clinical depression, anxiety, and relational trauma.
            </p>
            <p>
              We firmly believe that no person should be defined by the crises or hardships they experience. Our centre blends evidence-based psychotherapeutic modalities with medical oversight and holistic wellness practices, creating an environment where individuals can safely stabilize, reflect, and rebuild.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container values-layout">
          <div className="values-intro">
            <p className="eyebrow">Our Guiding Principles</p>
            <h2>The core values that guide our clinical practice.</h2>
            <p className="mt-4 text-muted">
              These principles shape every interaction, therapeutic session, and care plan at Eleos.
            </p>
          </div>
          <div className="values-editorial">
            {values.map(({ title, text }, index) => (
              <article className="value-entry" key={title}>
                <span className="value-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose-grid">
          <div>
            <p className="eyebrow">Mission &amp; Vision</p>
            <h2>A clear mandate for transformative healthcare.</h2>
          </div>
          <div className="prose">
            <h3>Our Mission</h3>
            <p>
              To deliver compassionate, evidence-based wellness and rehabilitation care in a dignified and supportive sanctuary—empowering individuals to heal, rediscover their potential, and lead purposeful, fulfilling lives.
            </p>
            <h3>Our Vision</h3>
            <p>
              To be a premier centre of excellence in mental health and addiction recovery across Kenya, inspiring a community where wellness is embraced without stigma, and every journey is met with respect and hope.
            </p>
            <div className="mt-6 flex gap-4">
              <Link className="text-link" href="/our-story">
                Read our philosophy and story <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow eyebrow-light">Executive Inquiries</p>
            <h2>Connect with our leadership team.</h2>
          </div>
          <div>
            <p>
              Learn more about our clinical admissions, corporate mental health packages, or arrange an in-person facility consultation in Gatitu, Thika.
            </p>
            <Link className="button button-light" href="/contact">
              Contact Admissions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
