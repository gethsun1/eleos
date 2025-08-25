import React from 'react';
import { Heart } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg">
        <Heart className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-800">Eleos</span>
          <span className="text-sm text-gray-600 -mt-1">Wellness & Rehabilitation</span>
        </div>
      )}
    </div>
  );
};