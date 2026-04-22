"use client";

import React from 'react';

/**
 * Interface pour les propriétés du bouton.
 */
export interface ButtonProps {
  /** Le contenu du bouton (texte, icônes, etc.) */
  children: React.ReactNode;
  /** Fonction appelée lors du clic */
  onClick?: () => void;
  /** Type HTML du bouton */
  type?: "button" | "submit" | "reset";
  /** Style visuel prédéfini */
  variant?: "primary" | "secondary" | "danger";
  /** Classes CSS additionnelles (Tailwind) */
  className?: string;
}

/**
 * Composant Bouton réutilisable.
 * * @example
 * <Button variant="primary" onClick={() => console.log('test')}>
 * Cliquez ici
 * </Button>
 */
const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  className = "" 
}: ButtonProps) => {
  
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all active:scale-95 flex items-center justify-center";
  
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