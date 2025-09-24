'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/atoms/Logo';
import { Button } from '@/components/atoms/Button';
import { Menu, X, Phone, Calendar, Clock } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100' : 'bg-white/40 backdrop-blur-lg'
    }`}>
      {/* Top bar for contact info */}
      <div className="bg-[#a8996e] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between text-sm space-y-2 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">+254 711 143210</a>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</span>
                <span className="lg:hidden">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[#f5f5f4]/90 hidden lg:inline">Emergency: 24/7 Crisis Support Available</span>
              <span className="text-[#f5f5f4]/90 lg:hidden">24/7 Crisis Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-300 hover:text-[#a8996e] relative group ${
                  pathname === item.href ? 'text-[#a8996e]' : 'text-gray-700'
                }`}
              >
                {item.label}
                <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-[#a8996e] rounded-full transition-all duration-300 ${
                  pathname === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
              </Link>
            ))}
          </nav>
          
          <div className="hidden xl:flex items-center space-x-4">
            <a href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 text-gray-600 hover:text-[#a8996e] hover:bg-[#a8996e]/5 h-10 px-4 py-2 text-sm">
              <Phone className="w-4 h-4 mr-2" />
              +254 711 143210
            </a>
            <Button size="sm" className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>
          
          {/* Tablet/Mobile CTA Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 shadow-md h-10 px-3 py-2 text-sm bg-[#a8996e] text-white hover:bg-[#8b7d5a]">
              <Phone className="w-4 h-4" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 md:p-3 rounded-xl hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-2xl animate-slide-up">
            <div className="px-4 py-6 md:py-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-[#a8996e] bg-[#a8996e]/10 border-l-4 border-[#a8996e] shadow-sm'
                      : 'text-gray-700 hover:text-[#a8996e] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 md:pt-6 border-t border-gray-200 space-y-3 md:space-y-4">
                <Button size="md" className="w-full justify-center shadow-lg text-sm md:text-base">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Book Consultation
                </Button>
                <a href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl font-semibold border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white text-sm md:text-base h-12 px-6 py-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  WhatsApp: +254 711 143210
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};