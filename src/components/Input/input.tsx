// Styles
import { InputStyles } from './input.styles';

// utils
import InputProps from './input.model';

export const Input = ({ appearance, type, placeholder }: InputProps) => {
  return (
    <InputStyles appearance={appearance} type={type} placeholder={placeholder} />
  );
}