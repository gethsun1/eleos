import React from 'react';
import Image from 'next/image';
import { PageLayout } from '@/components/templates/PageLayout';
import { Button } from '@/components/atoms/Button';
import { Heart, Target, Eye, Users, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every individual with empathy, respect, and genuine concern for their wellbeing and recovery journey."
    },
    {
      icon: Target,
      title: "Excellence in Treatment",
      description: "We maintain the highest standards using evidence-based practices and continuous professional development."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We believe in the healing power of community support and building meaningful connections."
    },
    {
      icon: Award,
      title: "Professional Integrity",
      description: "We uphold the highest ethical standards and maintain transparency in all our interactions."
    },
    {
      icon: Globe,
      title: "Inclusive Approach",
      description: "We welcome and serve individuals from all backgrounds, cultures, and walks of life."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Martinez",
      role: "Clinical Director & Licensed Psychologist",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "15+ years specializing in trauma therapy and addiction recovery"
    },
    {
      name: "Michael Thompson",
      role: "Licensed Clinical Social Worker",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in family systems therapy and community mental health"
    },
    {
      name: "Dr. Jennifer Lee",
      role: "Psychiatrist & Medical Director",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Board-certified psychiatrist specializing in integrated care"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden hero-height">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/gallery/eleos.jpeg')] bg-cover bg-center parallax hero-bg sm:bg-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
              About Eleos Wellness
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Founded on the principle that everyone deserves compassionate, comprehensive care, 
              we are dedicated to being a beacon of hope in the wellness and rehabilitation community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Eleos Wellness & Rehabilitation Centre was born from a vision to create a place where 
                healing truly begins - not just treatment of symptoms, but comprehensive restoration 
                of hope, purpose, and wellbeing.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015 by a team of passionate healthcare professionals who saw the need for 
                more compassionate, holistic approach to wellness and rehabilitation, Eleos has grown 
                to become a trusted pillar in our community.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The name "Eleos" comes from the ancient Greek word for compassion and mercy - values 
                that are at the heart of everything we do. We believe that with the right support, 
                understanding, and professional guidance, every person has the capacity for healing and growth.
              </p>
              <Button size="lg">
                Learn More About Our Approach
              </Button>
            </div>
            <div className="animate-slide-up">
              <Image 
                src="/gallery/client_chat.png"
                alt="Our wellness center"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our mission and shape our approach to care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-stagger animate-stagger-1">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide compassionate, comprehensive wellness and rehabilitation services that 
                empower individuals and families to achieve lasting healing, recovery, and personal growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-stagger animate-stagger-2">
              <div className="flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mx-auto mb-6">
                <Eye className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading wellness and rehabilitation center where hope is restored, 
                lives are transformed, and communities are strengthened through healing and growth.
              </p>
            </div>

            {/* Approach */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-stagger animate-stagger-3">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in treating the whole person with evidence-based practices, 
                compassionate care, and a commitment to long-term recovery and wellness.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow animate-stagger animate-stagger-${index + 1}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-lg mr-3">
                      <value.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{value.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing the highest quality care 
              with compassion, expertise, and unwavering commitment to your wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-stagger animate-stagger-${index + 1}`}
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-teal-100 animate-slide-up">
            Our compassionate team is here to support you with personalized care tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-stagger">
            <Button variant="secondary" size="lg" className="animate-stagger-1">
              Contact Us Today
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600 animate-stagger-2">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}