import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full font-medium text-body-m transition-smooth-long focus:outline-none focus:ring-2 focus:ring-olive-deep/30 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed transform active:scale-[0.98]';

  const variantStyles = {
    primary: 'bg-olive-deep text-white hover:bg-olive-deep-hover hover:shadow-hover hover:-translate-y-0.5 shadow-soft',
    ghost: 'bg-transparent border-2 border-olive-mist/40 text-graphite hover:bg-sage-light hover:border-olive-mist',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
