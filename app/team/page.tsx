import { Users } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Our Team','Team profiles will be published when Eleos confirms approved names, roles and qualifications.','/team/');
export default function TeamPage(){return <PageLayout><PageHero label="Our team" title="People behind the care." copy="We want this page to introduce the people at Eleos accurately and respectfully."/><section className="section"><div className="container empty-team"><span className="team-icon"><Users/></span><h2>Team profiles are being prepared.</h2><p>Approved names, roles, qualifications and photographs have not yet been supplied. No staff profiles are published until Eleos confirms those details.</p><a className="text-link" href="/contact">Contact Eleos <span aria-hidden="true">→</span></a></div></section></PageLayout>;}
