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
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      {/* Top bar for contact info */}
      <div className="bg-[#a8996e] text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(254) 722-520-122</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[#f5f5f4]/90">Emergency: 24/7 Crisis Support Available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
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
          
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[#a8996e] hover:bg-[#a8996e]/5">
              <Phone className="w-4 h-4 mr-2" />
              (254) 722-520-122
            </Button>
            <Button size="sm" className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>
          
          {/* Mobile CTA Button */}
          <div className="md:hidden lg:hidden">
            <Button size="sm" className="mr-2 shadow-md">
              <Phone className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-2xl animate-slide-up">
            <div className="px-4 py-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-[#a8996e] bg-[#a8996e]/10 border-l-4 border-[#a8996e] shadow-sm'
                      : 'text-gray-700 hover:text-[#a8996e] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <Button size="lg" className="w-full justify-center shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-center border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (254) 722-520-122
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};