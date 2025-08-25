import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/atoms/Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#a8996e]/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#a8996e]/15 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Where healing begins and hope is restored. We provide comprehensive wellness and rehabilitation services with compassion, expertise, and an unwavering commitment to your healing journey.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-[#a8996e]/10 px-4 py-2 rounded-full border border-[#a8996e]/20">
                <Shield className="w-4 h-4 mr-2 text-[#a8996e]" />
                <span className="text-sm font-medium">Licensed & Certified</span>
              </div>
              <div className="flex items-center bg-[#a8996e]/10 px-4 py-2 rounded-full border border-[#a8996e]/20">
                <Heart className="w-4 h-4 mr-2 text-[#a8996e]" />
                <span className="text-sm font-medium">Compassionate Care</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#a8996e] transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#a8996e] transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#a8996e] transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#a8996e]/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-[#a8996e]" />
                </div>
                <div>
                  <span className="text-gray-300 font-medium">(254) 722-520-122</span>
                  <p className="text-sm text-gray-400 mt-1">24/7 Crisis Support</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#a8996e]/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-[#a8996e]" />
                </div>
                <div>
                  <span className="text-gray-300 font-medium">eleoswellnesscentre@gmail.com</span>
                  <p className="text-sm text-gray-400 mt-1">Get in touch</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#a8996e]/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-[#a8996e]" />
                </div>
                <div>
                  <span className="text-gray-300 font-medium">
                    Gatitu, Thika
                  </span>
                  <p className="text-sm text-gray-400 mt-1">Less than 1km from the town centre</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#a8996e]/10 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-5 h-5 text-[#a8996e]" />
                </div>
                <div>
                  <span className="text-gray-300 font-medium">Mon-Fri: 8AM-6PM</span>
                  <p className="text-sm text-gray-400 mt-1">Sat: 9AM-3PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Eleos Wellness & Rehabilitation Centre. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-[#a8996e] text-sm transition-all duration-300 hover:translate-x-1 inline-block">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#a8996e] text-sm transition-all duration-300 hover:translate-x-1 inline-block">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};