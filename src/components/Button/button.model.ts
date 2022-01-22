import React, { ButtonHTMLAttributes } from "react";

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  appeareance?: string;
  children?: React.ReactNode;
  label?: string;
}
