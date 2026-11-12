import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Gallery','A look at the image gallery information for Eleos Wellness & Rehabilitation Centre.','/gallery/');

export default function GalleryPage(){return <PageLayout><PageHero label="Gallery" title="A glimpse of the Eleos environment." copy="We are preparing this space for approved photographs of the centre and its activities."/><section className="section"><div className="container"><div className="gallery-empty"><span className="gallery-empty-mark">e</span><h2>Approved photographs are on their way.</h2><p>Current image files depict people and activities, but cannot be verified as Eleos staff, visitors or premises. We are holding them back until Eleos confirms suitable images and publication permissions.</p></div></div></section></PageLayout>;}
