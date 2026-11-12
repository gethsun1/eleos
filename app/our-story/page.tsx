import Link from 'next/link';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';
import { ArrowRight } from 'lucide-react';

export const metadata = pageMetadata(
  'Our Story & Philosophy',
  'The foundational philosophy and clinical vision of Eleos Wellness & Rehabilitation Centre in Gatitu, Thika.',
  '/our-story/'
);

export default function OurStoryPage() {
  return (
    <PageLayout>
      <PageHero 
        label="Our Story &amp; Philosophy" 
        title="Founded on the belief in human dignity and lasting restoration." 
        copy="Seeking recovery takes immense strength. Eleos was established to provide an empathetic, evidence-based sanctuary where every person is met with unconditional respect, clinical excellence, and a clear path forward." 
      />

      <section className="section">
        <div className="container story-wrap">
          <p className="eyebrow">The Origin of Eleos</p>
          <h2>Active compassion as the cornerstone of true healing.</h2>
          <p className="lead">
            The name <em>Eleos</em> originates from the classical Greek concept of compassionate empathy—mercy that is not passive, but actively moves to relieve suffering and restore dignity. It reflects our core conviction: that no individual is beyond recovery, and that every life deserves dedicated, dignified care.
          </p>
          <div className="story-note">
            <span className="story-mark">E</span>
            <p>
              True healing begins when clinical expertise meets deep human understanding. We do not simply treat symptoms; we walk beside each client as they reclaim their identity, purpose, and self-worth.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container prose-grid">
          <div>
            <p className="eyebrow">Holistic Systems Healing</p>
            <h2>Restoring individuals, reconciling families, uplifting communities.</h2>
          </div>
          <div className="prose">
            <p>
              Addiction and mental health struggles rarely occur in isolation. They ripple across families, careers, and communities. At Eleos, our treatment approach addresses the relational and emotional ecology of each client.
            </p>
            <p>
              Through structured family therapy sessions, codependency healing, and reintegration guidance, we ensure that the support network surrounding the individual heals concurrently, creating a fertile foundation for lifelong sobriety and emotional resilience.
            </p>
            <p>
              Nestled in Gatitu, Thika, our centre offers the peace of mind that comes from physical and psychological retreat—giving clients the space they need to breathe, heal, and rebuild.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow eyebrow-light">Your Pathway to Healing</p>
            <h2>Begin your recovery journey in total confidence.</h2>
          </div>
          <div>
            <p>
              Our admissions team is available to discuss residential rehabilitation, outpatient mental health care, or family counseling options.
            </p>
            <Link className="button button-light" href="/contact">
              Consult with Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
