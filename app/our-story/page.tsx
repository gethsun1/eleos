import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Our Story','Read the verified story of Eleos Wellness & Rehabilitation Centre as details are confirmed.','/our-story/');

export default function OurStoryPage() { return <PageLayout><PageHero label="Our story" title="A story still being told." copy="The history of Eleos belongs to the people and community who have shaped it. We are gathering verified details before sharing that story here." />
  <section className="section"><div className="container story-wrap"><p className="eyebrow">The journey of Eleos</p><h2>Built on the belief that a caring conversation matters.</h2><p className="lead">Eleos’ name and message speak to compassion, healing and hope. Further details about its founding, history and milestones are awaiting confirmation from the centre.</p><div className="story-note"><span className="story-mark">E</span><p>We will add the centre’s verified history here when it has been approved for publication.</p></div></div></section>
  <section className="section section-forest"><div className="container approach-grid"><div><p className="eyebrow eyebrow-light">The next chapter</p><h2>Get to know Eleos directly.</h2></div><div><p>For current information about the centre and its services, contact the Eleos team in Gatitu, Thika.</p><a className="button button-light" href="/contact">Contact Eleos <span aria-hidden="true">→</span></a></div></div></section>
  </PageLayout>; }
