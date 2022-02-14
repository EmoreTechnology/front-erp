// Dependencies
import React from 'react';
import SelectProps from './select.model';

// Styles
import { Container } from './select.styles';

const SelectComponent: React.FC<SelectProps> = ({ title, categories, measurement, type }) => {
	return (
		<div className="select">
			<p>{title}</p>

			<Container>
				<select name="" id="">
					{type ? (
						<>
							<option id="">{categories?.food}</option>
							<option id="">{categories?.drinks}</option>
						</>
					) : (
						<>
							<option id="">{measurement?.kilo}</option>
							<option id="">{measurement?.kilograms}</option>
							<option id="">{measurement?.liter}</option>
							<option id="">{measurement?.milligrams}</option>
						</>
					)}
				</select>
			</Container>
		</div >
	);
}

export default SelectComponent;