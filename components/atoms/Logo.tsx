import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden">
        <Image
          src="/eleos-logo.jpeg"
          alt="Eleos Logo"
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
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