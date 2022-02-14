// Dependencies
import { HTMLAttributes } from 'react';

interface IOptionsMeasurement {
  kilo?: string;
  kilograms?: string;
  liter?: string;
  milligrams?: string;
}

export interface IOptionCategories {
  food?: string;
  drinks?: string;
}

export default interface SelectProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  type?: boolean;
  categories?: IOptionCategories;
  measurement?: IOptionsMeasurement;
}
