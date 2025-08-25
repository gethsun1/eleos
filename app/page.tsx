import React from 'react';
import { PageLayout } from '@/components/templates/PageLayout';
import { HeroSection } from '@/components/organisms/HeroSection';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { TestimonialCard } from '@/components/molecules/TestimonialCard';
import { Button } from '@/components/atoms/Button';
import { Heart, Brain, Users, Shield, Building, MapPin, Phone } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: "Mental Health Services",
      description: "Comprehensive mental health support with licensed professionals.",
      icon: Brain,
      features: ["Individual Therapy", "Group Sessions", "Crisis Support", "Medication Management"]
    },
    {
      title: "Addiction Recovery",
      description: "Evidence-based addiction treatment and long-term recovery support.",
      icon: Shield,
      features: ["Detox Support", "Counseling", "Relapse Prevention", "Family Education"]
    },
    {
      title: "Family & Marriage Therapy",
      description: "Strengthening relationships and building healthy family dynamics.",
      icon: Users,
      features: ["Couples Counseling", "Family Sessions", "Parenting Support", "Communication Skills"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Former Client",
      content: "Eleos gave me hope when I had none left. The compassionate care and professional expertise helped me rebuild my life.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Family Member",
      content: "The family therapy program helped us reconnect and communicate better than ever. We're stronger as a family now.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Wellness Program Participant",
      content: "The holistic approach to wellness here is extraordinary. I've never felt more supported in my healing journey.",
      rating: 5
    }
  ];

  return (
    <PageLayout>
      <HeroSection />
      
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Compassionate Care for Your Healing Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Eleos Wellness & Rehabilitation Centre, we believe that healing is a journey that requires compassion, expertise, and hope. Our comprehensive approach addresses the whole person - mind, body, and spirit.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a team of dedicated professionals and evidence-based treatments, we provide the support and resources you need to reclaim your life and restore your hope.
              </p>
              <Button size="lg">
                Discover Our Approach
              </Button>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/5998530/pexels-photo-5998530.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Compassionate care at Eleos"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of services designed to meet you wherever you are in your healing journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className={`animate-stagger animate-stagger-${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <Button variant="secondary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at Eleos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-stagger animate-stagger-1">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We approach every individual with empathy, understanding, and genuine care for their wellbeing.
              </p>
            </div>
            
            <div className="text-center animate-stagger animate-stagger-2">
              <div className="flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mx-auto mb-6">
                <Shield className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in treatment, using evidence-based practices and continuous improvement.
              </p>
            </div>
            
            <div className="text-center animate-stagger animate-stagger-3">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community support and building connections that facilitate healing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Stories of Hope and Healing
            </h2>
            <p className="text-lg text-gray-600">
              Hear from those whose lives have been transformed at Eleos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className={`animate-stagger animate-stagger-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 text-teal-100 animate-slide-up">
            Take the first step towards wellness and recovery. Our compassionate team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-stagger">
            <Button variant="secondary" size="lg" className="animate-stagger-1">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600 animate-stagger-2">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (254) 722-520-122
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}