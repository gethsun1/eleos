import Image from 'next/image';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Gallery','A view of Eleos Wellness & Rehabilitation Centre in Gatitu, Thika.','/gallery/');

export default function GalleryPage(){return <PageLayout><PageHero label="Gallery" title="A glimpse of the Eleos environment." copy="A view of the centre in Gatitu, Thika."/><section className="section"><div className="container"><figure className="gallery-item gallery-cover"><Image src="/eleos_wellness_rehabilitation_centre_cover.jpeg" alt="Entrance to Eleos Wellness Centre, framed by greenery in Gatitu, Thika" width={1128} height={191} sizes="(max-width: 1050px) 100vw, 1050px"/><figcaption>Eleos Wellness & Rehabilitation Centre · Gatitu, Thika</figcaption></figure></div></section></PageLayout>;}
