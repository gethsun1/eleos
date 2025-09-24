import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/atoms/Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern with subtle image motif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[url('/gallery/eleos.jpeg')] bg-cover bg-center rounded-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[url('/gallery/client_chat.png')] bg-cover bg-center rounded-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo className="mb-4 md:mb-6" />
            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
              Where healing begins and hope is restored. We provide comprehensive wellness and rehabilitation services with compassion, expertise, and an unwavering commitment to your healing journey.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center bg-[#a8996e]/10 px-3 md:px-4 py-2 rounded-full border border-[#a8996e]/20">
                <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 text-[#a8996e]" />
                <span className="text-xs md:text-sm font-medium">Licensed & Certified</span>
              </div>
              <div className="flex items-center bg-[#a8996e]/10 px-3 md:px-4 py-2 rounded-full border border-[#a8996e]/20">
                <Heart className="w-3 h-3 md:w-4 md:h-4 mr-2 text-[#a8996e]" />
                <span className="text-xs md:text-sm font-medium">Compassionate Care</span>
              </div>
            </div>
            
            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#a8996e] transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#a8996e] transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#a8996e] transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block text-sm md:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block text-sm md:text-base">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#a8996e] transition-all duration-300 hover:translate-x-1 inline-block text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#a8996e]/10 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#a8996e]" />
                </div>
                <div>
                  <a href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium text-sm md:text-base hover:underline underline-offset-2">+254 711 143210</a>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">24/7 WhatsApp Support</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#a8996e]/10 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#a8996e]" />
                </div>
                <div>
                  <span className="text-gray-300 font-medium text-sm md:text-base">eleoswellnesscentre@gmail.com</span>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">Get in touch</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#a8996e]/10 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#a8996e]" />
                </div>
                <div>
                  <span className="text-gray-300 font-medium text-sm md:text-base">
                    Gatitu, Thika
                  </span>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">Less than 1km from the town centre</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#a8996e]/10 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#a8996e]" />
                </div>
                <div>
                  <span className="text-gray-300 font-medium text-sm md:text-base">Mon-Fri: 8AM-6PM</span>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">Sat: 9AM-3PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Eleos Wellness & Rehabilitation Centre. All rights reserved.
          </p>
          <div className="flex space-x-6 md:space-x-8 mt-3 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-[#a8996e] text-xs md:text-sm transition-all duration-300 hover:translate-x-1 inline-block">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#a8996e] text-xs md:text-sm transition-all duration-300 hover:translate-x-1 inline-block">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};