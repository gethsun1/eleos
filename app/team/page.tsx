import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, Brain, Shield, HeartHandshake, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Our Team & Leadership',
  'Meet Elsie Rodrot, Co-Founder, and explore the multidisciplinary clinical care standard at Eleos Wellness & Rehabilitation Centre in Gatitu, Thika.',
  '/team/'
);

const clinicalDisciplines = [
  {
    icon: Stethoscope,
    title: 'Medical & Psychiatric Oversight',
    role: 'Detoxification & Medical Stabilization',
    description: 'Medical consultants providing comprehensive clinical evaluations, safe detoxification oversight, and coordinated medical care to ensure patient stability and physical safety from admission through discharge.',
  },
  {
    icon: Brain,
    title: 'Clinical Psychology & Psychotherapy',
    role: 'Individual & Group Psychotherapy',
    description: 'Licensed psychotherapists specializing in evidence-based modalities—including Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and trauma-informed care for depression, anxiety, and complex PTSD.',
  },
  {
    icon: Shield,
    title: 'Certified Addiction Counselors',
    role: 'Substance Recovery & Relapse Prevention',
    description: 'Dedicated addiction professionals who facilitate structured recovery programs, behavioral habit restructuring, 12-step facilitation, and individualized relapse prevention strategies for sustainable sobriety.',
  },
  {
    icon: HeartHandshake,
    title: 'Family Therapists & Wellness Guides',
    role: 'Systems Healing & Holistic Wellness',
    description: 'Therapists focused on family reconciliation and codependency healing, working alongside wellness practitioners in nutrition, physical reconditioning, and mindfulness to nurture the whole person.',
  },
];

const clinicalPledges = [
  {
    title: 'Absolute Confidentiality',
    text: 'All assessments, treatment plans, and patient records are safeguarded with strict medical confidentiality and privacy standards.',
  },
  {
    title: 'Person-Centered Dignity',
    text: 'We honor each individual’s personal story and intrinsic worth, ensuring an empathetic, non-punitive, and respectful healing environment.',
  },
  {
    title: 'Evidence-Based Methodologies',
    text: 'Our treatment pathways combine scientifically validated psychological therapies with holistic, restorative wellness practices.',
  },
  {
    title: 'Continuous Family Care',
    text: 'We actively involve and support families throughout the healing process, establishing a strong foundation for lifelong recovery.',
  },
];

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHero 
        label="Our Leadership &amp; Care Team" 
        title="Compassionate leadership, multidisciplinary clinical excellence." 
        copy="At Eleos, healing is guided by visionary leadership and a collaborative team of licensed professionals committed to clinical integrity, patient dignity, and comprehensive recovery." 
      />

      {/* Leadership Profile: Elsie Rodrot */}
      <section className="team-feature-section section" aria-labelledby="elsie-name">
        <div className="container">
          <article className="team-feature">
            <div className="team-feature-portrait">
              <Image
                src="/elsie-rodrot.webp"
                alt="Elsie Rodrot, Co-Founder of Eleos Wellness & Rehabilitation Centre."
                width={387}
                height={517}
                sizes="(max-width: 740px) 100vw, (max-width: 1100px) 44vw, 500px"
                priority
              />
            </div>
            <div className="team-feature-copy">
              <p className="eyebrow">Leadership &amp; Co-Founder</p>
              <h2 id="elsie-name">Elsie Rodrot</h2>
              <p className="team-feature-role">Co-Founder</p>
              <p>
                Elsie Rodrot is a Co-Founder of Eleos Wellness &amp; Rehabilitation Centre, guided by a passion for mental health advocacy, healing and meaningful social impact.
              </p>
              <p>
                Her interest in psychology and the human experience has shaped a commitment to making support more compassionate, accessible and grounded in understanding.
              </p>
              <p>
                At Eleos, Elsie contributes to vision building, programme development, community outreach and client support coordination. Working alongside qualified mental health professionals, she is committed to helping shape an environment where care is approached with empathy, dignity and respect.
              </p>
              <p>
                Beyond her work, Elsie enjoys singing, dancing and participating in initiatives that uplift individuals and communities.
              </p>
              <Link className="text-link" href="/contact">
                Connect with our team <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Clinical Disciplines */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Multidisciplinary Standard</p>
              <h2>A Collaborative Healthcare Team</h2>
            </div>
            <p>
              Recovery requires a multidimensional approach. Our team brings together diverse clinical expertise to address every facet of physical, emotional, and psychological health.
            </p>
          </div>

          <div className="team-disciplines-grid">
            {clinicalDisciplines.map(({ icon: Icon, title, role, description }) => (
              <article className="team-discipline-card" key={title}>
                <div className="service-icon"><Icon /></div>
                <span className="team-role-badge">{role}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Pledges */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Ethical Standards</p>
              <h2>The Eleos Care Pledge</h2>
            </div>
            <p>
              The foundational ethical commitments that govern every clinical relationship at our centre in Gatitu, Thika.
            </p>
          </div>

          <div className="pledge-grid">
            {clinicalPledges.map(({ title, text }, i) => (
              <div className="pledge-card" key={title}>
                <span className="pledge-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="section section-forest">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow eyebrow-light">Speak with Our Clinical Intake Team</p>
            <h2>We are here to answer your questions with complete discretion.</h2>
          </div>
          <div>
            <p>
              Whether you are inquiring for yourself, a family member, or a corporate client, our admissions team is ready to guide you through the available options.
            </p>
            <div className="actions">
              <Link className="button button-brass" href="/contact">
                Contact Admissions <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
