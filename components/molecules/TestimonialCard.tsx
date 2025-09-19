import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  className
}) => {
  return (
    <div className={`bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 relative overflow-hidden group ${className}`}>
      {/* Quote icon background */}
      <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <Quote className="w-16 md:w-24 h-16 md:h-24 text-[#a8996e]" />
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-tr from-[#a8996e]/5 to-transparent rounded-full translate-y-12 md:translate-y-16 -translate-x-12 md:-translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4 md:mb-6">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 md:w-6 md:h-6 text-[#a8996e] fill-current group-hover:scale-110 transition-transform duration-300" />
          ))}
        </div>
        
        <p className="text-gray-700 italic mb-6 md:mb-8 leading-relaxed text-base md:text-lg font-medium relative">
          <Quote className="w-4 h-4 md:w-6 md:h-6 text-[#a8996e] absolute -top-1 md:-top-2 -left-1 md:-left-2 opacity-50" />
          "{content}"
        </p>
        
        <div className="border-t border-gray-100 pt-4 md:pt-6">
          <p className="font-bold text-gray-800 text-base md:text-lg mb-1">{name}</p>
          <p className="text-[#a8996e] font-semibold text-sm md:text-base">{role}</p>
        </div>
      </div>
    </div>
  );
};