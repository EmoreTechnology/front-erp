// Dependencies
import React from 'react';

// Styles
import { ButtonStyled } from "./button.styles";

// Utils
import ButtonProps from "./button.model";

const ButtonComponent: React.FC<ButtonProps> = ({
	children,
	appeareance,
	label,
	title,
}) => {
	return (
		<div className="container">
			<span>{title}</span>
			<ButtonStyled appeareance={appeareance}>
				{children}
				{label}
			</ButtonStyled>
		</div>
	);
}

export default ButtonComponent;
