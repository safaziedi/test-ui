import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
    className?: string;
}
declare const Button: ({ children, onClick, type, variant, className }: ButtonProps) => React.JSX.Element;

export { Button, type ButtonProps };
