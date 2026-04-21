"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  className = "" 
}: ButtonProps) => {
  
  // Base styles using Tailwind
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all active:scale-95";
  
  // Variant styles
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;