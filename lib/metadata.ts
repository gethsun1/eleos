import type { Metadata } from 'next';

const origin = 'https://eleos.vercel.app';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${origin}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website', locale: 'en_KE', siteName: 'Eleos Wellness & Rehabilitation Centre',
      title: `${title} | Eleos Wellness Centre`, description, url,
      images: [{ url: '/eleos.jpeg', alt: 'Eleos Wellness & Rehabilitation Centre' }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | Eleos Wellness Centre`, description, images: ['/eleos.jpeg'] },
  };
}
