import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Calendar, Phone, ArrowDown, CheckCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 parallax bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/eleos.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#a8996e]/30 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border border-[#a8996e]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#a8996e]/25 rounded-full"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-6 md:mb-8 animate-fade-in">
          <span className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-[#a8996e]/20 backdrop-blur-sm border border-[#a8996e]/30 rounded-full text-[#a8996e] text-xs md:text-sm font-semibold mb-4 md:mb-6 shadow-lg">
            <CheckCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            <span className="hidden sm:inline">Professional Care • Compassionate Support</span>
            <span className="sm:hidden">Professional Care</span>
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 md:mb-8 leading-tight animate-fade-in tracking-tight">
          Where Healing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#a8996e] via-[#c4b894] to-[#a8996e] mt-1 md:mt-2">
            Begins
          </span>
          <span className="block text-white mt-1 md:mt-2">
            and Hope is Restored
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 md:mb-12 text-gray-100 leading-relaxed max-w-4xl md:max-w-5xl mx-auto animate-slide-up font-light px-2 md:px-0">
          Comprehensive wellness and rehabilitation services with compassion, expertise, 
          and an unwavering commitment to your healing journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-stagger mb-12 md:mb-16 px-4 md:px-0">
          <Button size="lg" className="text-base md:text-lg px-8 md:px-12 py-4 md:py-5 shadow-2xl hover:shadow-[#a8996e]/25 animate-stagger-1 transform hover:scale-105 transition-all duration-300 bg-[#a8996e] hover:bg-[#8b7d5a] border-2 border-[#a8996e] hover:border-[#8b7d5a] w-full sm:w-auto">
            <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            Start Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base md:text-lg px-8 md:px-12 py-4 md:py-5 border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-2xl hover:shadow-white/25 animate-stagger-2 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            Call (254) 722-520-122
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-12 md:mt-20 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-16 text-xs md:text-sm text-gray-200 animate-fade-in px-4 md:px-0">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/20">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full mr-2 md:mr-3 shadow-lg"></div>
            <span className="font-medium">Licensed Professionals</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/20">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full mr-2 md:mr-3 shadow-lg"></div>
            <span className="font-medium">24/7 Crisis Support</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/20">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-purple-400 rounded-full mr-2 md:mr-3 shadow-lg"></div>
            <span className="font-medium">HIPAA Compliant</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-xs md:text-sm mb-2 md:mb-3 opacity-80 font-medium tracking-wide">Scroll to discover</span>
          <div className="w-6 h-8 md:w-8 md:h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <ArrowDown className="w-3 h-3 md:w-5 md:h-5 mt-2 md:mt-3 opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};