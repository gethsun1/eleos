import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Training & Education', 'Explore professional short-course topics, caregiving preparation and student learning enquiries at Eleos.', '/training/');

const courses = [
  ['First Aid', 'First Aid Training', 'Enquire about First Aid training and the information currently available from Eleos.'],
  ['Caregiving', 'Caregiving Course', 'Ask about caregiving course availability and the intended learning pathway.'],
  ['CNA Safety Course', 'CNA Safety Course', 'Contact Eleos for details about this safety course, including eligibility and course arrangements.'],
  ['EMT', 'EMT Training', 'Enquire about the EMT training topic and confirm entry requirements and delivery details.'],
  ['Life Support', 'Life Support Training', 'Ask the Eleos team for current information about Life Support training.'],
];

export default function TrainingPage() { return <PageLayout>
  <PageHero label="Training & education" title="Learning pathways, with the details made clear." copy="Explore short professional course topics and student learning enquiries. Eleos can confirm availability, requirements, delivery and any certification information." />
  <section className="section"><div className="container training-layout"><div className="training-intro"><p className="eyebrow">Short professional courses</p><h2>Start with the subject you are looking for.</h2><p>Course duration, fees, delivery mode, entry requirements, assessment and certification details are not published until confirmed by Eleos.</p><Link className="text-link" href="/contact?category=Services%20and%20programmes">Ask about a course <ArrowRight size={16}/></Link></div>
    <div className="course-list">{courses.map(([name, category, description], index) => <article key={name} className="course-row"><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{name}</h3><p>{description}</p><Link href={`/contact?category=${encodeURIComponent(category)}`}>Enquire about {name} <ArrowRight size={14}/></Link></div></article>)}</div>
  </div></section>
  <section className="section section-cream"><div className="container training-pathways"><article><p className="eyebrow">Career preparation</p><h2>International caregiving resume revamping</h2><p>A professional career-document preparation enquiry for people pursuing caregiving opportunities. No overseas job placement, sponsorship, visa outcome or recruitment service is promised.</p><Link className="button button-forest" href="/contact?category=International%20Caregiving%20Resume%20Revamping">Enquire about resume preparation <ArrowRight size={16}/></Link></article><article><p className="eyebrow">Student learning</p><h2>Internships &amp; practica</h2><p>Psychology and counselling students may enquire about internship and practicum opportunities. Eligible institutions, application steps, duration, supervision, fees and capacity need to be confirmed. These enquiries do not imply independent clinical practice or guaranteed placement.</p><div className="actions"><Link className="text-link" href="/contact?category=Psychology%20Student%20Internship">Psychology internship <ArrowRight size={15}/></Link><Link className="text-link" href="/contact?category=Counselling%20Practicum">Counselling practicum <ArrowRight size={15}/></Link></div></article></div></section>
  <section className="section"><div className="container"><p className="small muted">No duration, fees, examination arrangements, accreditation, certification body or employment outcome is stated on this page. Contact Eleos for confirmed details.</p></div></section>
 </PageLayout>; }
