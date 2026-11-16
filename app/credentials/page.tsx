import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Credentials & Recognitions', 'How Eleos verifies professional qualifications, registrations and institutional recognitions before publication.', '/credentials/');

export default function CredentialsPage() { return <PageLayout>
  <PageHero label="Credentials & recognitions" title="Trust is supported by evidence." copy="Eleos will publish credentials and recognitions when their details and supporting evidence are confirmed." />
  <section className="section"><div className="container credentials-content"><p className="eyebrow">Evidence-led information</p><h2>Verification before publication.</h2><p>Professional qualifications, practitioner registrations, training certifications, affiliations, awards, partnerships and recognitions should be accompanied by the exact name, issuing organisation, person or institution concerned, relevant dates, a supporting document or official source, and permission to publish.</p><p>No credential, recognition or accreditation is listed here because verified evidence and publication permission were not present in the materials reviewed for this update. No third-party logos are used.</p><p className="small muted">To add an item, Eleos should provide its supporting documentation or official source and confirm permission to publish.</p></div></section>
 </PageLayout>; }
