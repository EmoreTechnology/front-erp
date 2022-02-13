// Dependencies
import React, { useState } from 'react';

// Styles
import { Container } from './accordeon.styles';

// Utils
import { IAccordeonProps } from '../../utils/models/accordion.model';

const Accordeon: React.FC<IAccordeonProps> = ({ content, titleProduct, product, quantity }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<Container>
			<div className="accordion-item">
				<div
					className={isActive ? `accordion-title-active` : "accordion-title"}
					onClick={() => setIsActive(!isActive)}
				>
					<p>{titleProduct}</p>

					<p>{product}</p>

					<p>{quantity}</p>

					<p>{isActive ? "-" : "+"}</p>
				</div>

				{isActive &&
					<div className="accordion-content">
						<p>Produto: {content.name}</p>

						<p>Descrição: {content.secondName}</p>

						<p>Preço: R$ {content.price}</p>
					</div>
				}
			</div>
		</Container>
	);
}

export default Accordeon;