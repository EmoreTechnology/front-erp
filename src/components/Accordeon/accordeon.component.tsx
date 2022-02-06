// Dependencies
import React, { useState } from 'react';

// Styles
import { Container } from './accordeon.styles';

// Utils
import { IAccordeonProps } from '../../utils/models/accordion.model';

const Accordeon: React.FC<IAccordeonProps> = ({ content, title }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<Container>
			<div className="accordion-item">
				<div
					className="accordion-title"
					onClick={() => setIsActive(!isActive)}
				>
					<p>{title}</p>

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