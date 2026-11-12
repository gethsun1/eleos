import Link from 'next/link';
import { Heart, ShieldCheck, Users, Sprout, Building2, Compass, HandHeart, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Clinical Wings & Services',
  'Explore comprehensive addiction recovery, psychotherapy, family counseling, and executive wellness programs at Eleos in Gatitu, Thika.',
  '/services/'
);

const services = [
  {
    icon: ShieldCheck,
    tag: 'Residential & Detox',
    title: 'Substance Recovery & Detoxification',
    body: 'Medically supervised detoxification and evidence-based residential rehabilitation. Our structured programs focus on physical stabilisation, psychological reframing, and sustainable sobriety with relapse prevention.',
  },
  {
    icon: Heart,
    tag: 'Clinical Psychotherapy',
    title: 'Mental Health & Psychological Care',
    body: 'Professional assessment and individual psychotherapy for depression, generalized anxiety, trauma, PTSD, and mood disorders, delivered in a safe, compassionate therapeutic setting.',
  },
  {
    icon: Users,
    tag: 'Family Systems',
    title: 'Family & Marriage Therapy',
    body: 'Restorative counseling tailored for couples and family units. We address codependency, heal relational friction, rebuild honest communication, and guide families through recovery together.',
  },
  {
    icon: Sprout,
    tag: 'Holistic Health',
    title: 'Integrated Wellness Programmes',
    body: 'Holistic mind-body restoration combining physical reconditioning, mindfulness practices, nutritional support, and stress regulation to nurture overall vitality and balance.',
  },
  {
    icon: Building2,
    tag: 'Executive & Enterprise',
    title: 'Corporate Wellness & EAP Programs',
    body: 'Tailored mental health solutions for organisations, leadership burnout recovery, confidential executive counseling, and workplace Employee Assistance Programs (EAP).',
  },
  {
    icon: Compass,
    tag: 'Sanctuary Experience',
    title: 'Therapeutic Retreats',
    body: 'Immersive wellness retreats situated in the serene environment of Gatitu, Thika, designed for individuals and professionals needing dedicated time for deep mental reset and rejuvenation.',
  },
  {
    icon: HandHeart,
    tag: 'Advocacy & Education',
    title: 'Community Outreach & Mental Health Education',
    body: 'Stigma-reduction initiatives, educational workshops, and community partnerships providing vital mental health literacy and compassionate support throughout the region.',
  },
];

const intakeSteps = [
  {
    step: '01',
    title: 'Confidential Inquiry',
    desc: 'Reach out via phone, WhatsApp, or our secure form. Our intake team listens with empathy and absolute discretion.',
  },
  {
    step: '02',
    title: 'Clinical Assessment',
    desc: 'A comprehensive evaluation of physical, emotional, and psychological needs to determine the ideal level of care.',
  },
  {
    step: '03',
    title: 'Personalized Care Plan',
    desc: 'An individualized therapeutic roadmap integrating psychotherapy, wellness practices, and medical oversight.',
  },
  {
    step: '04',
    title: 'Continuing Aftercare',
    desc: 'Structured ongoing support, family check-ins, and community reintegration to ensure sustainable, lifelong recovery.',
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero 
        label="Clinical & Wellness Programs" 
        title="Comprehensive, dignified care tailored to your journey." 
        copy="Evidence-based addiction recovery, mental health psychotherapy, family healing, and restorative wellness in Gatitu, Thika." 
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our Clinical Wings</p>
              <h2>Specialised Care Disciplines</h2>
            </div>
            <p>
              Every program is guided by clinical standards, patient dignity, and personalized therapeutic care.
            </p>
          </div>

          <div className="service-list">
            {services.map(({ icon: Icon, tag, title, body }, index) => (
              <article className="service-row" key={title}>
                <div className="service-icon"><Icon /></div>
                <div>
                  <div className="service-row-meta">
                    <span className="eyebrow">Area {String(index + 1).padStart(2, '0')}</span>
                    <span className="service-tag">{tag}</span>
                  </div>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </div>
                <Link className="text-link" href={`/contact?category=${encodeURIComponent(title)}`}>
                  Consult Eleos <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Admissions Pathway</p>
              <h2>How Your Journey Begins</h2>
            </div>
            <p>
              A transparent, supportive 4-step process designed to ensure safety, comfort, and personalized care from day one.
            </p>
          </div>

          <div className="steps-grid">
            {intakeSteps.map(({ step, title, desc }) => (
              <div className="step-card" key={step}>
                <span className="step-number">{step}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow eyebrow-light">Privacy &amp; Discretion</p>
            <h2>Uncompromising commitment to confidentiality.</h2>
          </div>
          <div>
            <p>
              We understand that seeking help for mental health or addiction requires profound courage. At Eleos, your privacy is safeguarded at every touchpoint, from initial inquiry through aftercare.
            </p>
            <div className="actions">
              <Link className="button button-brass" href="/contact">
                Book a Confidential Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Have Questions About Admissions?</p>
            <h2>Speak directly with our clinical intake team.</h2>
            <p>We are available to answer your questions and guide you toward the right care pathway.</p>
          </div>
          <div className="actions">
            <a 
              className="button button-forest" 
              href="https://wa.me/254711143210?text=Hello%20Eleos%20Team%2C%20I%20would%20like%20to%20inquire%20about%20admissions%20and%20services." 
              target="_blank" 
              rel="noreferrer"
            >
              WhatsApp Us <ArrowRight size={18} />
            </a>
            <Link className="button button-ghost-dark" href="/contact">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
