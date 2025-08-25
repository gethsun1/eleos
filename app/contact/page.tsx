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
  Heart
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(555) 123-4567",
      secondary: "24/7 Crisis Line: (555) 911-HELP",
      description: "Speak with our intake coordinators"
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
      <section className="pt-24 pb-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Ready to take the first step towards healing? We're here to listen, support, 
              and guide you on your journey to wellness and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
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
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow animate-stagger animate-stagger-${index + 1}`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{method.title}</h3>
                <p className="text-lg font-semibold text-teal-600 mb-2">{method.primary}</p>
                <p className="text-md text-gray-600 mb-4">{method.secondary}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center animate-fade-in">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-red-800 mb-2">Crisis Support Available</h3>
            <p className="text-red-700 mb-4">
              If you're experiencing a mental health crisis, call our 24/7 crisis line: 
              <span className="font-bold"> (555) 911-HELP</span>
            </p>
            <p className="text-sm text-red-600">
              For immediate emergencies, please call 911 or visit your nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                All inquiries are treated with complete confidentiality.
              </p>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="animate-slide-up">
              {/* Operating Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Operating Hours</h3>
                </div>
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button size="lg" className="w-full justify-start">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Live Chat Support
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full justify-start">
                    <MapPin className="w-5 h-5 mr-3" />
                    Request a Facility Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Healing City, our center is easily accessible 
              with ample parking and public transportation options.
            </p>
          </div>

          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center animate-slide-up">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500">
                123 Wellness Drive, Healing City, HC 12345
              </p>
              <Button variant="outline" className="mt-4">
                Open in Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Confidentiality */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Your Privacy is Protected
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We understand that reaching out for help requires courage and trust. All communications 
              with Eleos Wellness & Rehabilitation Centre are completely confidential and protected 
              under HIPAA regulations. Your privacy and dignity are our highest priorities.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Compassionate Care
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                HIPAA Compliant
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Crisis Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}