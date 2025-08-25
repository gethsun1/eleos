import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Calendar, Phone, ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 parallax bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/3825583/pexels-photo-3825583.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
          Where Healing Begins,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-400 mt-2">
            and Hope is Restored
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-4xl mx-auto animate-slide-up">
          Comprehensive wellness and rehabilitation services with compassion, expertise, 
          and an unwavering commitment to your healing journey. Every step forward matters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger">
          <Button size="lg" className="text-lg px-10 py-4 shadow-xl hover:shadow-2xl animate-stagger-1 transform hover:scale-105 transition-all duration-300">
            <Calendar className="w-5 h-5 mr-3" />
            Start Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl hover:shadow-2xl animate-stagger-2 transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call (254) 722-520-122
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-sm text-gray-300 animate-fade-in">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            Licensed Professionals
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            24/7 Crisis Support
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
            HIPAA Compliant
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-80">Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <ArrowDown className="w-4 h-4 mt-2 opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};