import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'transition-smooth-long hover:-translate-y-1 hover:shadow-premium'
    : '';

  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-card-lg p-8 md:p-10 shadow-soft border border-white/60 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
