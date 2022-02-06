import React, { useState } from 'react';

import { Container } from './accordeon.styles';

interface AccordionContentProps {
	name: string;
	secondName: string;
	price: number;
}

export interface IAccordeonProps {
	title: string;
	content: AccordionContentProps;
}

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