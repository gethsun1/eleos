'use client';

import React from 'react';
import { PageLayout } from '@/components/templates/PageLayout';
import { ContactForm } from '@/components/molecules/ContactForm';
import { Button } from '@/components/atoms/Button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  MessageCircle,
  Shield,
  Heart,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp Us",
      primary: "+254 711 143210",
      secondary: "Tap to open WhatsApp chat",
      description: "Fastest response for questions and support"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@eleoswellness.com",
      secondary: "admissions@eleoswellness.com",
      description: "Get detailed information about our services"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Wellness Drive",
      secondary: "Healing City, HC 12345",
      description: "Schedule a tour of our facilities"
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Crisis Support", hours: "24/7 Available" }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-[#a8996e]/10 text-[#a8996e] text-sm font-semibold rounded-full mb-6 border border-[#a8996e]/20">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get in Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up leading-relaxed">
              Ready to take the first step towards healing? We're here to listen, support, 
              and guide you on your journey to wellness and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the method that feels most comfortable for you. Our compassionate team 
              is ready to answer your questions and help you find the support you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-stagger animate-stagger-${index + 1} group`}
              >
                <a href={index === 0 ? 'https://wa.me/254711143210' : '#'} target={index === 0 ? '_blank' : undefined} rel={index === 0 ? 'noopener noreferrer' : undefined} className="block">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#a8996e]/10 rounded-2xl mx-auto mb-6 group-hover:bg-[#a8996e] transition-all duration-500">
                    <method.icon className="w-8 h-8 text-[#a8996e] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{method.title}</h3>
                  <p className="text-lg font-semibold text-[#a8996e] mb-2">{method.primary}</p>
                  <p className="text-md text-gray-600 mb-4">{method.secondary}</p>
                </a>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 text-center animate-fade-in shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mx-auto mb-6">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">Crisis Support Available</h3>
            <p className="text-red-700 mb-6 text-lg">
              If you're experiencing a mental health crisis, call our 24/7 crisis line: 
              <span className="font-bold text-xl"> (555) 911-HELP</span>
            </p>
            <p className="text-sm text-red-600">
              For immediate emergencies, please call 911 or visit your nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. 
                All inquiries are treated with complete confidentiality.
              </p>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="animate-slide-up">
              {/* Operating Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#a8996e]/10 rounded-xl mr-4">
                    <Clock className="w-6 h-6 text-[#a8996e]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Operating Hours</h3>
                </div>
                <div className="space-y-4">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-semibold">{schedule.day}</span>
                      <span className="text-gray-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button size="lg" className="w-full justify-start bg-[#a8996e] hover:bg-[#8b7d5a] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Live Chat Support
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full justify-start text-[#a8996e] hover:bg-[#a8996e]/10 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
                    <MapPin className="w-5 h-5 mr-3" />
                    Request a Facility Tour
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Healing City, our center is easily accessible 
              with ample parking and public transportation options.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center animate-slide-up shadow-xl border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#a8996e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-[#a8996e]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Interactive Map</h3>
              <p className="text-gray-600 text-lg mb-6">
                123 Wellness Drive, Healing City, HC 12345
              </p>
              <Button variant="outline" className="border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Open in Google Maps
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Confidentiality */}
      <section className="py-24 bg-gradient-to-br from-[#a8996e]/5 via-white to-[#a8996e]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center w-20 h-20 bg-[#a8996e]/10 rounded-3xl mx-auto mb-8">
              <Shield className="w-10 h-10 text-[#a8996e]" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Your Privacy is Protected
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              We understand that reaching out for help requires courage and trust. All communications 
              with Eleos Wellness & Rehabilitation Centre are completely confidential and protected 
              under HIPAA regulations. Your privacy and dignity are our highest priorities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-sm text-gray-600">
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#a8996e]/20">
                <Heart className="w-4 h-4 mr-2 text-[#a8996e]" />
                <span className="font-medium">Compassionate Care</span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#a8996e]/20">
                <Shield className="w-4 h-4 mr-2 text-[#a8996e]" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#a8996e]/20">
                <Clock className="w-4 h-4 mr-2 text-[#a8996e]" />
                <span className="font-medium">24/7 Crisis Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}