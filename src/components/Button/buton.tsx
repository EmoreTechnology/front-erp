import { ButtonStyled } from "./button.styles";
import ButtonProps from "./button.model";

export const ButtonLogin = ({
  children,
  appeareance,
  label,
}: ButtonProps) => {
  return (
    <ButtonStyled appeareance={appeareance}>
      {children}
      {label}
    </ButtonStyled>
  );
};
