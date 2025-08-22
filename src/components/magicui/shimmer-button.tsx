import React from 'react';
import './shimmer-button.css';

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ShimmerButton({ children, className = '', onClick, disabled = false }: ShimmerButtonProps) {
  return (
    <button
      className={`shimmer-button ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="shimmer-effect"></div>
      <span className="button-content">
        {children}
      </span>
    </button>
  );
}
