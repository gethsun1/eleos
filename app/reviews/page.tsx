import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { Reviews } from '@/components/molecules/Reviews';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Visitor Feedback','Read published visitor feedback or submit a rating for moderation by Eleos.','/reviews/');
export default function ReviewsPage(){return <PageLayout><PageHero label="Visitor feedback" title="Honest feedback, shared with care." copy="Ratings and comments are reviewed before publication. Please keep feedback general and avoid sharing private health information."/><section className="section"><div className="container"><Reviews/></div></section></PageLayout>;}
