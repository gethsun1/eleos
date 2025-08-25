import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eleos Wellness & Rehabilitation Centre - Where Healing Begins',
  description: 'Professional wellness and rehabilitation services. Mental health, addiction recovery, family therapy, and wellness programs. Where healing begins and hope is restored.',
  keywords: 'wellness, rehabilitation, mental health, addiction recovery, therapy, counseling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}