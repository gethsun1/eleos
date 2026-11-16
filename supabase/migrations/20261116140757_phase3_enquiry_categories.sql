-- Expand the existing enquiry topic constraint without changing RLS or access grants.
alter table public.enquiries
  drop constraint if exists enquiries_category_check;

alter table public.enquiries
  add constraint enquiries_category_check check (category in (
    'General information', 'Rehabilitation', 'VIP Rehabilitation',
    'Elderly Physiotherapy', 'Chiropractic', 'Dementia Support',
    'First Aid Training', 'Caregiving Course', 'CNA Safety Course',
    'EMT Training', 'Life Support Training',
    'International Caregiving Resume Revamping',
    'Psychology Student Internship', 'Counselling Student Internship',
    'Psychology Practicum', 'Counselling Practicum',
    'Services and programmes', 'Family enquiry', 'Visit to the centre', 'Other'
  ));
