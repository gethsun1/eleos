import './globals.css';
import type { Metadata } from 'next';

const siteUrl='https://eleos.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Eleos Wellness & Rehabilitation Centre | Thika, Kenya', template: '%s | Eleos Wellness Centre' },
  description: 'Contact Eleos Wellness & Rehabilitation Centre in Gatitu, Thika to learn about wellness and rehabilitation support.',
  applicationName: 'Eleos Wellness & Rehabilitation Centre',
  openGraph: { type:'website', locale:'en_KE', siteName:'Eleos Wellness & Rehabilitation Centre', title:'Eleos Wellness & Rehabilitation Centre', description:'Where Healing Begins and Hope is Restored.', url:siteUrl, images:[{url:'/eleos_wellness_rehabilitation_centre_cover.jpeg',alt:'Eleos Wellness & Rehabilitation Centre entrance in Gatitu, Thika'}] },
  twitter: { card:'summary_large_image', title:'Eleos Wellness & Rehabilitation Centre', description:'Where Healing Begins and Hope is Restored.', images:['/eleos_wellness_rehabilitation_centre_cover.jpeg'] },
  icons: { icon:'/favicon.ico', apple:'/eleos-logo.jpeg' },
  alternates: { canonical: '/' },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
