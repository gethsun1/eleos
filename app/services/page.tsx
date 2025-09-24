import React from 'react';
import Image from 'next/image';
import { PageLayout } from '@/components/templates/PageLayout';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { Button } from '@/components/atoms/Button';
import { 
  Brain, 
  Shield, 
  Users, 
  Heart, 
  Building, 
  Mountain, 
  Globe,
  Phone,
  Calendar,
  ArrowRight 
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "Mental Health Services",
      description: "Comprehensive mental health support with licensed professionals specializing in anxiety, depression, PTSD, and other mental health conditions.",
      icon: Brain,
      features: [
        "Individual Therapy Sessions",
        "Group Therapy Programs", 
        "Crisis Intervention Support",
        "Medication Management",
        "Cognitive Behavioral Therapy",
        "Trauma-Informed Care"
      ]
    },
    {
      title: "Addiction Recovery Programs",
      description: "Evidence-based addiction treatment and comprehensive recovery support for substance abuse and behavioral addictions.",
      icon: Shield,
      features: [
        "Medically Supervised Detox",
        "Individual & Group Counseling",
        "Relapse Prevention Planning",
        "12-Step Program Integration",
        "Family Education & Support",
        "Aftercare Planning"
      ]
    },
    {
      title: "Family & Marriage Therapy",
      description: "Specialized therapy services focused on strengthening relationships and building healthy family dynamics.",
      icon: Users,
      features: [
        "Couples Counseling",
        "Family Systems Therapy",
        "Parenting Support Programs",
        "Communication Skills Training",
        "Conflict Resolution",
        "Relationship Enrichment"
      ]
    },
    {
      title: "Wellness Programs",
      description: "Holistic wellness programs designed to promote overall health and wellbeing through integrated mind-body approaches.",
      icon: Heart,
      features: [
        "Mindfulness & Meditation",
        "Stress Management",
        "Nutrition Counseling",
        "Exercise Therapy",
        "Sleep Hygiene Education",
        "Life Skills Development"
      ]
    },
    {
      title: "Corporate Wellness Solutions", 
      description: "Comprehensive workplace wellness programs designed to support employee mental health and organizational wellbeing.",
      icon: Building,
      features: [
        "Employee Assistance Programs",
        "Workplace Mental Health Training",
        "Stress Management Workshops",
        "Leadership Coaching",
        "Team Building Activities",
        "Burnout Prevention"
      ]
    },
    {
      title: "Therapeutic Retreats",
      description: "Immersive healing experiences combining therapeutic interventions with restorative environments for intensive growth.",
      icon: Mountain,
      features: [
        "Weekend Healing Retreats",
        "Intensive Therapy Programs",
        "Nature-Based Therapy",
        "Group Processing Sessions",
        "Mindfulness Immersion",
        "Personal Growth Workshops"
      ]
    },
    {
      title: "Community Outreach Programs",
      description: "Community-focused initiatives aimed at promoting mental health awareness and providing accessible support services.",
      icon: Globe,
      features: [
        "Mental Health Education",
        "Support Group Facilitation",
        "Crisis Hotline Services",
        "School-Based Programs",
        "Community Workshops",
        "Volunteer Training"
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section with Banner */}
      <section className="pt-24 pb-10 relative overflow-hidden hero-height">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/gallery/client_chat.png')] bg-cover bg-center parallax hero-bg sm:bg-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/30 to-black/45"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-slide-up">
              Comprehensive wellness and rehabilitation services tailored to meet you wherever you are 
              in your healing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-stagger">
              <Button size="lg" className="animate-stagger-1 bg-[#a8996e] hover:bg-[#8b7d5a] border-2 border-[#a8996e]">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="animate-stagger-2 border-2 border-white text-white hover:bg-white hover:text-[#a8996e]">
                <Calendar className="w-5 h-5 mr-2" />
                Book Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Subsection with gold palette */}
      <section className="pb-16 bg-gradient-to-br from-[#a8996e]/10 via-white to-[#a8996e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="glass rounded-2xl p-6 md:p-8 shadow-xl border border-white/30">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Compassionate, Evidence‑Based Care</h2>
              <p className="text-gray-700 text-lg mb-6">Our programs combine clinical excellence with human warmth in a healing environment.</p>
              <div className="flex gap-3">
                <Button className="bg-[#a8996e] hover:bg-[#8b7d5a]">Explore Programs</Button>
                <Button variant="outline" className="border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white">Talk to Us</Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/gallery/eleos.jpeg" alt="Eleos facility" width={1000} height={700} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className={`animate-stagger animate-stagger-${(index % 3) + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Care Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-[url('/gallery/clientchatII.jpg')] bg-cover bg-center rounded-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[url('/gallery/yoga_fitness.png')] bg-cover bg-center rounded-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Specialized Care Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our integrated approach combines evidence-based treatments with compassionate care, 
              ensuring each individual receives personalized support for their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center animate-stagger animate-stagger-1">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6">
                <Brain className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Evidence-Based</h3>
              <p className="text-gray-600 leading-relaxed">
                All our treatments are grounded in proven therapeutic approaches and the latest research 
                in wellness and rehabilitation science.
              </p>
            </div>

            <div className="text-center animate-stagger animate-stagger-2">
              <div className="flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mx-auto mb-6">
                <Users className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Individualized</h3>
              <p className="text-gray-600 leading-relaxed">
                Every treatment plan is carefully crafted to address your specific needs, goals, 
                and circumstances for maximum effectiveness.
              </p>
            </div>

            <div className="text-center animate-stagger animate-stagger-3">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Holistic</h3>
              <p className="text-gray-600 leading-relaxed">
                We address the whole person - mind, body, and spirit - recognizing that true healing 
                encompasses all aspects of wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Your Healing Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We guide you through every step of your healing process with structured support and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-stagger animate-stagger-1">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Initial Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation to understand your unique needs and develop a personalized treatment plan.
              </p>
            </div>

            <div className="text-center animate-stagger animate-stagger-2">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Treatment Planning</h3>
              <p className="text-gray-600 text-sm">
                Collaborative development of goals and strategies tailored to your specific situation and preferences.
              </p>
            </div>

            <div className="text-center animate-stagger animate-stagger-3">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Active Treatment</h3>
              <p className="text-gray-600 text-sm">
                Engaging in therapeutic interventions with ongoing support and regular progress monitoring.
              </p>
            </div>

            <div className="text-center animate-stagger animate-stagger-4">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Continued Support</h3>
              <p className="text-gray-600 text-sm">
                Ongoing maintenance and support to ensure lasting recovery and continued personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 text-teal-100 animate-slide-up">
            Our experienced team is here to provide the support and guidance you need. 
            Take the first step towards wellness and recovery today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-stagger">
            <Button variant="secondary" size="lg" className="animate-stagger-1">
              <Phone className="w-5 h-5 mr-2" />
              Call (254) 722-520-122
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600 animate-stagger-2">
              Schedule Online
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}