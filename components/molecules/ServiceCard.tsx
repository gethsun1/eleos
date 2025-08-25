import React from 'react';
import { Button } from '@/components/atoms/Button';
import { LucideIcon } from 'lucide-react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  className
}) => {
  return (
    <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-[#a8996e]/30 transform hover:-translate-y-3 group relative overflow-hidden ${className}`}>
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#a8996e]/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#a8996e]/10 to-[#a8996e]/5 rounded-2xl mr-6 group-hover:from-[#a8996e] group-hover:to-[#8b7d5a] transition-all duration-500 shadow-lg group-hover:shadow-xl">
            <Icon className="w-8 h-8 text-[#a8996e] group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#8b7d5a] transition-colors duration-300 leading-tight">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">{description}</p>
        
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
              <CheckCircle className="w-5 h-5 text-[#a8996e] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full group/btn hover:bg-[#a8996e] hover:border-[#a8996e] hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2"
        >
          Learn More
          <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};