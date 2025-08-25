import React from 'react';
import { PageLayout } from '@/components/templates/PageLayout';
import { HeroSection } from '@/components/organisms/HeroSection';
import { StatsSection } from '@/components/organisms/StatsSection';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { TestimonialCard } from '@/components/molecules/TestimonialCard';
import { Button } from '@/components/atoms/Button';
import { Heart, Brain, Users, Shield, Building, MapPin, Phone, ArrowRight, CheckCircle, Award, Clock, Quote, Calendar } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: "Mental Health Services",
      description: "Comprehensive mental health support with licensed professionals, offering personalized care for anxiety, depression, trauma, and more.",
      icon: Brain,
      features: ["Individual Therapy", "Group Sessions", "Crisis Support", "Medication Management"]
    },
    {
      title: "Addiction Recovery",
      description: "Evidence-based addiction treatment and long-term recovery support with compassionate care and proven methodologies.",
      icon: Shield,
      features: ["Detox Support", "Counseling", "Relapse Prevention", "Family Education"]
    },
    {
      title: "Family & Marriage Therapy",
      description: "Strengthening relationships and building healthy family dynamics through professional guidance and support.",
      icon: Users,
      features: ["Couples Counseling", "Family Sessions", "Parenting Support", "Communication Skills"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Former Client",
      content: "Eleos gave me hope when I had none left. The compassionate care and professional expertise helped me rebuild my life and find my purpose again.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Family Member",
      content: "The family therapy program helped us reconnect and communicate better than ever. We're stronger as a family now and have the tools to navigate challenges together.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Wellness Program Participant",
      content: "The holistic approach to wellness here is extraordinary. I've never felt more supported in my healing journey. The staff truly cares about your recovery.",
      rating: 5
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every individual with empathy, understanding, and genuine care for their wellbeing and recovery journey.",
      color: "#a8996e"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "We maintain the highest standards in treatment, using evidence-based practices and continuous improvement in all our services.",
      color: "#84CC16"
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of community support and building connections that facilitate healing and long-term recovery.",
      color: "#3B82F6"
    }
  ];

  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />
      
      {/* Introduction Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 bg-[#a8996e]/10 text-[#a8996e] text-sm font-semibold rounded-full mb-6 border border-[#a8996e]/20">
                  <Award className="w-4 h-4 mr-2" />
                  About Our Approach
                </span>
              </div>
              <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Compassionate Care for Your 
                <span className="text-[#a8996e] block"> Healing Journey</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Eleos Wellness & Rehabilitation Centre, we believe that healing is a journey that requires compassion, expertise, and hope. Our comprehensive approach addresses the whole person - mind, body, and spirit.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                With a team of dedicated professionals and evidence-based treatments, we provide the support and resources you need to reclaim your life and restore your hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-[#a8996e] hover:bg-[#8b7d5a] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Discover Our Approach
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Meet Our Team
                </Button>
              </div>
            </div>
            <div className="animate-slide-up relative">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5998530/pexels-photo-5998530.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Compassionate care at Eleos"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-[#a8996e]/10 rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="w-8 h-8 text-[#a8996e]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">Professional Care</p>
                      <p className="text-gray-600">Licensed & Experienced</p>
                    </div>
                  </div>
                </div>
                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-[#a8996e] text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <span className="inline-flex items-center px-6 py-3 bg-[#a8996e]/10 text-[#a8996e] text-sm font-semibold rounded-full mb-6 border border-[#a8996e]/20">
              <Shield className="w-4 h-4 mr-2" />
              Our Services
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer a comprehensive range of services designed to meet you wherever you are in your healing journey, with personalized care and evidence-based treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className={`animate-stagger animate-stagger-${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in">
            <Button variant="outline" size="lg" className="border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <span className="inline-flex items-center px-6 py-3 bg-[#a8996e]/10 text-[#a8996e] text-sm font-semibold rounded-full mb-6 border border-[#a8996e]/20">
              <Heart className="w-4 h-4 mr-2" />
              Our Values
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Eleos, ensuring the highest quality of care and support for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className={`text-center animate-stagger animate-stagger-${index + 1} group`}>
                <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[${value.color}]/10 to-[${value.color}]/5 rounded-3xl mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <value.icon className={`w-10 h-10 text-[${value.color}]`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <span className="inline-flex items-center px-6 py-3 bg-[#a8996e]/10 text-[#a8996e] text-sm font-semibold rounded-full mb-6 border border-[#a8996e]/20">
              <Quote className="w-4 h-4 mr-2" />
              Testimonials
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Stories of Hope and Healing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those whose lives have been transformed at Eleos through our compassionate care and professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
      <section className="py-32 bg-gradient-to-br from-[#a8996e] to-[#8b7d5a] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/15 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-bold mb-8 animate-fade-in">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-2xl mb-12 text-[#f5f5f4] animate-slide-up leading-relaxed max-w-4xl mx-auto">
            Take the first step towards wellness and recovery. Our compassionate team is here to support you every step of the way with professional care and understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-stagger">
            <Button variant="secondary" size="lg" className="animate-stagger-1 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-12 py-5">
              <Calendar className="w-6 h-6 mr-3" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#a8996e] animate-stagger-2 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-12 py-5">
              <Phone className="w-6 h-6 mr-3" />
              Call Now: (254) 722-520-122
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}