declare module '@/components/icons' {
  export function Star({ className }: { className?: string }): JSX.Element;
  export function StarFill({ className }: { className?: string }): JSX.Element;
}

declare module '@/components/ui/textarea' {
  import { TextareaHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';

  export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

  export const Textarea: ForwardRefExoticComponent<
    TextareaProps & RefAttributes<HTMLTextAreaElement>
  >;
}

declare module '@/components/ui/button' {
  import { ButtonHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
  }

  export const Button: ForwardRefExoticComponent<
    ButtonProps & RefAttributes<HTMLButtonElement>
  >;
} 