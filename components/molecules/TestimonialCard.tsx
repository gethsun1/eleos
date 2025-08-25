import React from 'react';
import { Star } from 'lucide-react';

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
    <div className={`bg-white rounded-xl shadow-lg p-8 border border-gray-100 ${className}`}>
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-600 italic mb-6 leading-relaxed">"{content}"</p>
      
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};