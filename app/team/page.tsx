import Image from 'next/image';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Our Team',
  'Meet Elsie Rodrot, Co-Founder of Eleos Wellness & Rehabilitation Centre.',
  '/team/'
);

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our team"
        title="Care begins with how we meet one another."
        copy="At Eleos, a welcoming conversation starts with listening, respect and an open mind."
      />
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
              <p className="eyebrow">Eleos Wellness & Rehabilitation Centre</p>
              <h2 id="elsie-name">Elsie Rodrot</h2>
              <p className="team-feature-role">Co-Founder</p>
              <p>Elsie Rodrot is a Co-Founder of Eleos Wellness & Rehabilitation Centre, guided by a passion for mental health advocacy, healing and meaningful social impact.</p>
              <p>Her interest in psychology and the human experience has shaped a commitment to making support more compassionate, accessible and grounded in understanding.</p>
              <p>At Eleos, Elsie contributes to vision building, programme development, community outreach and client support coordination. Working alongside qualified mental health professionals, she is committed to helping shape an environment where care is approached with empathy, dignity and respect.</p>
              <p>Beyond her work, Elsie enjoys singing, dancing and participating in initiatives that uplift individuals and communities.</p>
              <a className="text-link" href="/contact">Contact Eleos <span aria-hidden="true">→</span></a>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
