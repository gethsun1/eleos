import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-lime-500 text-white hover:bg-lime-600 hover:shadow-lg transform hover:-translate-y-0.5',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white',
    ghost: 'text-teal-600 hover:bg-teal-50'
  };
  
  const sizes = {
    sm: 'h-9 px-3 py-2 text-sm',
    md: 'h-11 px-8 py-2',
    lg: 'h-14 px-10 py-3 text-lg'
  };
  
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};