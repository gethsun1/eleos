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
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="animate-fade-in">
              <div className="mb-6 md:mb-8">
                <span className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-[#a8996e]/10 text-[#a8996e] text-xs md:text-sm font-semibold rounded-full mb-4 md:mb-6 border border-[#a8996e]/20">
                  <Award className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  About Our Approach
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight">
                Compassionate Care for Your 
                <span className="text-[#a8996e] block"> Healing Journey</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                At Eleos Wellness & Rehabilitation Centre, we believe that healing is a journey that requires compassion, expertise, and hope. Our comprehensive approach addresses the whole person - mind, body, and spirit.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
                With a team of dedicated professionals and evidence-based treatments, we provide the support and resources you need to reclaim your life and restore your hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Button size="md" className="bg-[#a8996e] hover:bg-[#8b7d5a] shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
                  Discover Our Approach
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
                <Button variant="outline" size="md" className="border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
                  Meet Our Team
                </Button>
              </div>
            </div>
            <div className="animate-slide-up relative">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5998530/pexels-photo-5998530.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Compassionate care at Eleos"
                  className="rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl"
                />
                <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3 md:space-x-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#a8996e]/10 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 md:w-8 md:h-8 text-[#a8996e]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm md:text-lg">Professional Care</p>
                      <p className="text-gray-600 text-xs md:text-base">Licensed & Experienced</p>
                    </div>
                  </div>
                </div>
                {/* Floating stats */}
                <div className="absolute -top-3 md:-top-6 -right-3 md:-right-6 bg-[#a8996e] text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                  <div className="text-center">
                    <div className="text-xl md:text-3xl font-bold">15+</div>
                    <div className="text-xs md:text-sm opacity-90">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
            <span className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-[#a8996e]/10 text-[#a8996e] text-xs md:text-sm font-semibold rounded-full mb-4 md:mb-6 border border-[#a8996e]/20">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Our Core Services
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
              We offer a comprehensive range of services designed to meet you wherever you are in your healing journey, with personalized care and evidence-based treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className={`animate-stagger animate-stagger-${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 md:mt-16 animate-fade-in">
            <Button variant="outline" size="md" className="border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
              View All Services
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
            <span className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-[#a8996e]/10 text-[#a8996e] text-xs md:text-sm font-semibold rounded-full mb-4 md:mb-6 border border-[#a8996e]/20">
              <Heart className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Our Core Values
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
              These principles guide everything we do at Eleos, ensuring the highest quality of care and support for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className={`text-center animate-stagger animate-stagger-${index + 1} group`}>
                <div className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[${value.color}]/10 to-[${value.color}]/5 rounded-2xl md:rounded-3xl mx-auto mb-6 md:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <value.icon className={`w-8 h-8 md:w-10 md:h-10 text-[${value.color}]`} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">{value.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed px-2 md:px-0">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
            <span className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-[#a8996e]/10 text-[#a8996e] text-xs md:text-sm font-semibold rounded-full mb-4 md:mb-6 border border-[#a8996e]/20">
              <Quote className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Stories of Hope and Healing
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
              Hear from those whose lives have been transformed at Eleos through our compassionate care and professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
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
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#a8996e] to-[#8b7d5a] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 md:top-20 left-10 md:left-20 w-32 md:w-64 h-32 md:h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-24 md:w-48 h-24 md:h-48 border border-white/15 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 animate-fade-in">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-8 md:mb-12 text-[#f5f5f4] animate-slide-up leading-relaxed max-w-4xl mx-auto px-4 md:px-0">
            Take the first step towards wellness and recovery. Our compassionate team is here to support you every step of the way with professional care and understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center animate-stagger px-4 md:px-0">
            <Button variant="secondary" size="md" className="animate-stagger-1 shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base lg:text-lg px-8 md:px-12 py-4 md:py-5 w-full sm:w-auto">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2 md:mr-3" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="md" className="border-2 border-white text-white hover:bg-white hover:text-[#a8996e] animate-stagger-2 shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base lg:text-lg px-8 md:px-12 py-4 md:py-5 w-full sm:w-auto">
              <Phone className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2 md:mr-3" />
              Call Now: (254) 722-520-122
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}