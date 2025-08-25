import React from 'react';
import { PageLayout } from '@/components/templates/PageLayout';
import { Button } from '@/components/atoms/Button';
import { Heart, Calendar, Users, Award, Building, MapPin } from 'lucide-react';

export default function OurStoryPage() {
  const timeline = [
    {
      year: "2015",
      title: "The Vision is Born",
      description: "Founded by a team of passionate healthcare professionals who recognized the need for more compassionate, holistic approach to wellness and rehabilitation.",
      icon: Heart,
      highlight: true
    },
    {
      year: "2016",
      title: "First Facility Opens",
      description: "Our first wellness center opens its doors, serving the local community with mental health services and addiction recovery programs.",
      icon: Building
    },
    {
      year: "2017",
      title: "Program Expansion",
      description: "Added family therapy services and corporate wellness programs to meet growing community needs.",
      icon: Users
    },
    {
      year: "2018",
      title: "Community Recognition",
      description: "Received the Community Health Excellence Award for outstanding contribution to local wellness initiatives.",
      icon: Award
    },
    {
      year: "2019",
      title: "Therapeutic Retreats Launch",
      description: "Introduced immersive healing retreats combining traditional therapy with nature-based interventions.",
      icon: MapPin
    },
    {
      year: "2020",
      title: "Telehealth Innovation",
      description: "Rapidly adapted to provide virtual therapy services, ensuring continuity of care during challenging times.",
      icon: Calendar
    },
    {
      year: "2021",
      title: "Research Partnership",
      description: "Established partnerships with local universities to advance research in trauma-informed care and recovery.",
      icon: Building
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Today, we serve hundreds of individuals and families, remaining committed to our founding vision of compassionate care.",
      icon: Heart,
      highlight: true
    }
  ];

  const milestones = [
    { number: "2,500+", label: "Lives Transformed", description: "Individuals supported on their healing journey" },
    { number: "95%", label: "Client Satisfaction", description: "Consistently high satisfaction ratings" },
    { number: "50+", label: "Professional Staff", description: "Licensed therapists, counselors, and specialists" },
    { number: "9", label: "Years of Service", description: "Dedicated to community wellness since 2015" }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              A journey of compassion, growth, and unwavering commitment to healing. 
              Discover how Eleos became a beacon of hope in the wellness community.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                The Heart of Eleos
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The name "Eleos" comes from the ancient Greek word for compassion and mercy - 
                the very foundation upon which our center was built. In a world where healthcare 
                can feel impersonal and rushed, we wanted to create something different.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founders, Dr. Sarah Martinez and her team of dedicated professionals, 
                witnessed firsthand the gaps in traditional healthcare approaches. They saw 
                individuals struggling not just with symptoms, but with feeling heard, understood, 
                and truly cared for.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This led to a revolutionary approach: treating the whole person with genuine compassion, 
                evidence-based practices, and an unwavering belief that everyone deserves hope, 
                healing, and the chance to thrive.
              </p>
              <Button size="lg">
                Meet Our Team
              </Button>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="The founding vision of Eleos"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a simple vision to a thriving wellness center, every milestone represents 
              lives touched, healing facilitated, and hope restored.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center animate-stagger animate-stagger-${(index % 3) + 1} ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg ${
                      item.highlight ? 'bg-teal-600' : 'bg-white border-teal-200'
                    }`}>
                      <item.icon className={`w-8 h-8 ${
                        item.highlight ? 'text-white' : 'text-teal-600'
                      }`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                      <div className="flex items-center mb-4 md:hidden">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 ${
                          item.highlight ? 'bg-teal-600' : 'bg-teal-100'
                        }`}>
                          <item.icon className={`w-6 h-6 ${
                            item.highlight ? 'text-white' : 'text-teal-600'
                          }`} />
                        </div>
                        <span className="text-2xl font-bold text-teal-600">{item.year}</span>
                      </div>
                      <div className="hidden md:block mb-4">
                        <span className="text-2xl font-bold text-teal-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These milestones represent more than statistics - they represent lives changed, 
              families healed, and hope restored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`text-center animate-stagger animate-stagger-${index + 1}`}
              >
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                    {milestone.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-800 mb-2">
                    {milestone.label}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Forward */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Looking toward the future"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Looking Forward
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As we continue to grow and evolve, our commitment remains unchanged: to be a place 
                where healing truly begins and hope is never lost. We're constantly innovating, 
                learning, and adapting to better serve our community.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our future plans include expanding our therapeutic retreat programs, developing 
                new community outreach initiatives, and continuing to pioneer innovative 
                approaches to holistic wellness and rehabilitation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                But at the heart of everything we do will always be the simple truth that drove 
                our founding: everyone deserves compassionate care, professional expertise, 
                and the unwavering belief that healing is possible.
              </p>
              <Button size="lg">
                Join Our Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Become Part of Our Story
          </h2>
          <p className="text-xl mb-8 text-teal-100 animate-slide-up">
            Every person who walks through our doors adds a new chapter to the Eleos story. 
            Your healing journey could be the next inspiring chapter we celebrate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-stagger">
            <Button variant="secondary" size="lg" className="animate-stagger-1">
              Start Your Chapter
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600 animate-stagger-2">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}