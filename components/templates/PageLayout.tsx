import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
