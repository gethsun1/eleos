import React from 'react';
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
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-teal-50 via-blue-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slide-up">
              Comprehensive wellness and rehabilitation services tailored to meet you wherever you are 
              in your healing journey. Every service is delivered with compassion, expertise, and hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-stagger">
              <Button size="lg" className="animate-stagger-1">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="animate-stagger-2">
                <Calendar className="w-5 h-5 mr-2" />
                Book Assessment
              </Button>
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
      <section className="py-20 bg-gray-50">
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