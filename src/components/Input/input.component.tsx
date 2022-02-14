// Styles
import { InputStyles } from './input.styles';

// utils
import InputProps from './input.model';

import React from 'react';

// import { Container } from './styles';

const Input: React.FC<InputProps> = ({ appearance, type, placeholder, ref, title }) => {
	return (
		<div className="input" >
			<span>{title}</span>
			<InputStyles appearance={appearance} type={type} placeholder={placeholder} ref={ref} >
			</InputStyles>
		</div>
	);
}

export default Input;
