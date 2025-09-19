import React from 'react';
import { Users, Heart, Award, Clock, TrendingUp } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Lives Transformed",
      description: "Individuals who found hope and healing through our programs",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Success Rate",
      description: "Of clients report positive outcomes and lasting recovery",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Professional expertise in wellness and rehabilitation",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Crisis Support",
      description: "Round-the-clock care and emergency assistance available",
      color: "from-orange-500/20 to-orange-600/20"
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-[#a8996e] via-[#8b7d5a] to-[#a8996e] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 md:top-10 left-5 md:left-10 w-16 md:w-32 h-16 md:h-32 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-12 md:w-24 h-12 md:h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-8 md:w-16 h-8 md:h-16 border border-white/25 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Impact</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4 md:px-0">
            Transforming lives through compassionate care and evidence-based treatment approaches
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center animate-stagger animate-stagger-${index + 1} group`}>
              <div className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/20 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 group-hover:scale-105`}>
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl mx-auto mb-4 md:mb-6 group-hover:bg-white/30 transition-all duration-500">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 group-hover:text-3xl md:group-hover:text-4xl lg:group-hover:text-5xl transition-all duration-500">{stat.number}</div>
                <div className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">{stat.label}</div>
                <div className="text-xs md:text-sm text-white/80 leading-relaxed">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional trust indicator */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4 rounded-full border border-white/20">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2 md:mr-3 text-white" />
            <span className="text-sm md:text-base lg:text-lg font-semibold">Continuously improving our services for better outcomes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
