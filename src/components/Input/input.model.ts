import { InputHTMLAttributes } from 'react';

export default interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  appearance?: string;
  placeholder?: string;
  type?: string;
  ref?: any;
  title?: string;
}
