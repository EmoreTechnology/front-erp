import { InputHTMLAttributes } from 'react';

export default interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  appearance: string;
  placeholder?: string;
  children?: React.ReactNode;
  type?: string;
  ref?: any;
}
