import React from 'react';
import { Button } from '@/components/atoms/Button';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

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
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2 group ${className}`}>
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl mr-4 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300">
          <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-200">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 group-hover:bg-teal-600 transition-colors duration-300"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <Button variant="outline" size="sm" className="w-full group/btn hover:bg-teal-600 hover:border-teal-600 hover:text-white">
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
      </Button>
    </div>
  );
};