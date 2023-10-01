import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className="rounded-full bg-matgpt-blue px-8 py-2 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
