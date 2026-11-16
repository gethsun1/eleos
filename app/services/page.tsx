import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/templates/PageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Services & Rehabilitation', 'Explore rehabilitation, elderly wellness, VIP rehabilitation and related support at Eleos Wellness & Rehabilitation Centre in Thika.', '/services/');

const groups = [
  { number: '01', title: 'Rehabilitation services', intro: 'Speak with Eleos about rehabilitation support and the available care pathway. Suitability and current availability should be discussed directly with the centre.', items: ['Rehabilitation enquiry', 'VIP rehabilitation enquiry'] },
  { number: '02', title: 'Elderly care & wellness', intro: 'Enquire about support for older adults. A qualified professional should assess individual needs and whether any service is appropriate.', items: ['Physiotherapy for older adults', 'Chiropractic services', 'Support for people living with dementia'] },
  { number: '03', title: 'Training & education', intro: 'Eleos is sharing information about short professional courses and training topics. Ask the centre to confirm course availability, requirements and any certification details.', items: ['First Aid', 'Caregiving', 'CNA Safety Course', 'EMT', 'Life Support'] },
  { number: '04', title: 'Student learning opportunities', intro: 'Students can enquire about psychology and counselling internships or practica. Placement arrangements, supervision and capacity need confirmation.', items: ['Psychology and counselling internships', 'Psychology and counselling practica'] },
  { number: '05', title: 'Caregiving career preparation', intro: 'A career-document preparation enquiry for people pursuing caregiving opportunities. It does not represent recruitment, placement or immigration services.', items: ['International Caregiving Resume Revamping'] },
];

export default function ServicesPage() {
  return <PageLayout>
    <PageHero label="Services & programmes" title="Explore support and learning at Eleos." copy="Find a starting point, then speak with the Eleos team to confirm what is currently available and appropriate for your needs." />
    <section className="section"><div className="container service-catalogue">
      {groups.map(group => <article className="catalogue-row" key={group.number}>
        <span className="catalogue-index">{group.number}</span>
        <div className="catalogue-copy"><p className="eyebrow">Eleos services</p><h2>{group.title}</h2><p>{group.intro}</p><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>
        <Link className="text-link" href={`/contact?category=${encodeURIComponent(group.title === 'Training & education' ? 'First Aid Training' : group.title === 'Student learning opportunities' ? 'Psychology Student Internship' : group.title === 'Caregiving career preparation' ? 'International Caregiving Resume Revamping' : group.title === 'Elderly care & wellness' ? 'Elderly Physiotherapy' : 'Rehabilitation')}`}>Ask about this <ArrowRight size={16}/></Link>
      </article>)}
    </div></section>
    <section className="section section-cream"><div className="container offer-panel">
      <div><p className="eyebrow">Rehabilitation special offer</p><h2>Three-month price schedule</h2><p>Contact Eleos to confirm eligibility, package terms and what each month includes before making a decision.</p></div>
      <ol className="offer-prices"><li><span>Month 1</span><strong>KES 70,000</strong></li><li><span>Month 2</span><strong>KES 60,000</strong></li><li><span>Month 3</span><strong>KES 60,000</strong></li></ol>
      <p className="offer-note">Inclusions, assessment requirements, payment terms, additional charges and offer availability are not specified here. Ask the Eleos team for current details.</p>
      <Link className="button button-forest" href="/contact?category=Rehabilitation">Enquire about rehabilitation <ArrowRight size={17}/></Link>
    </div></section>
    <section className="section"><div className="container cta-panel"><div><p className="eyebrow">Not sure where to start?</p><h2>Ask a question in the way that suits you.</h2></div><div className="actions"><a className="button button-forest" href="tel:+254721877272">Call Eleos</a><a className="button button-ghost-dark" href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer">WhatsApp Eleos</a><Link className="text-link" href="/training">Explore training <ArrowRight size={16}/></Link></div></div></section>
  </PageLayout>;
}
