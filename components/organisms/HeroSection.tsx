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
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center px-6 py-3 bg-[#a8996e]/20 backdrop-blur-sm border border-[#a8996e]/30 rounded-full text-[#a8996e] text-sm font-semibold mb-6 shadow-lg">
            <CheckCircle className="w-4 h-4 mr-2" />
            Professional Care • Compassionate Support
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in tracking-tight">
          Where Healing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#a8996e] via-[#c4b894] to-[#a8996e] mt-2">
            Begins
          </span>
          <span className="block text-white mt-2">
            and Hope is Restored
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-100 leading-relaxed max-w-5xl mx-auto animate-slide-up font-light">
          Comprehensive wellness and rehabilitation services with compassion, expertise, 
          and an unwavering commitment to your healing journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-stagger mb-16">
          <Button size="lg" className="text-lg px-12 py-5 shadow-2xl hover:shadow-[#a8996e]/25 animate-stagger-1 transform hover:scale-105 transition-all duration-300 bg-[#a8996e] hover:bg-[#8b7d5a] border-2 border-[#a8996e] hover:border-[#8b7d5a]">
            <Calendar className="w-6 h-6 mr-3" />
            Start Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-12 py-5 border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-2xl hover:shadow-white/25 animate-stagger-2 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            <Phone className="w-6 h-6 mr-3" />
            Call (254) 722-520-122
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-16 text-sm text-gray-200 animate-fade-in">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 shadow-lg"></div>
            <span className="font-medium">Licensed Professionals</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 shadow-lg"></div>
            <span className="font-medium">24/7 Crisis Support</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 shadow-lg"></div>
            <span className="font-medium">HIPAA Compliant</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-3 opacity-80 font-medium tracking-wide">Scroll to discover</span>
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <ArrowDown className="w-5 h-5 mt-3 opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};