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
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8996e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5 active:translate-y-0';
  
  const variants = {
    primary: 'bg-[#a8996e] text-white hover:bg-[#8b7d5a] hover:shadow-xl shadow-lg border-2 border-[#a8996e] hover:border-[#8b7d5a]',
    secondary: 'bg-[#84CC16] text-white hover:bg-[#65a30d] hover:shadow-xl shadow-lg border-2 border-[#84CC16] hover:border-[#65a30d]',
    outline: 'border-2 border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white shadow-lg hover:shadow-xl',
    ghost: 'text-[#a8996e] hover:bg-[#a8996e]/10 hover:shadow-md'
  };
  
  const sizes = {
    sm: 'h-10 px-4 py-2 text-sm',
    md: 'h-12 px-6 py-3 text-base',
    lg: 'h-16 px-8 py-4 text-lg'
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