import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
  backgroundColor?: string;
  textColor?: string;
  extraStyle?: string;
  children: React.ReactNode;
}

export default function Button({
  size = 'medium',
  backgroundColor = 'bg-matgpt-blue',
  textColor = 'text-white',
  extraStyle = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`${size === 'medium' ? 'px-8 py-2 text-base' : 'px-4 py-1 text-xs'} 
        ${backgroundColor} ${textColor} break-keep rounded-full ${extraStyle}`}
    >
      {children}
    </button>
  );
}
