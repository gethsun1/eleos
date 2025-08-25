'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/atoms/Logo';
import { Button } from '@/components/atoms/Button';
import { Menu, X, Phone, Calendar } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-teal-600 relative ${
                  pathname === item.href ? 'text-teal-600' : 'text-gray-700'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-teal-600">
              <Phone className="w-4 h-4 mr-2" />
              (254) 722-520-122
            </Button>
            <Button size="sm" className="shadow-md hover:shadow-lg">
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>
          
          {/* Mobile CTA Button */}
          <div className="md:hidden lg:hidden">
            <Button size="sm" className="mr-2">
              <Phone className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-teal-600 bg-teal-50 border-l-4 border-teal-600'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button size="sm" className="w-full justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-center">
                  <Phone className="w-4 h-4 mr-2" />
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