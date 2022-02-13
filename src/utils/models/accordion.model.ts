interface AccordionContentProps {
	name: string;
	secondName: string;
	price: number;
}

export interface IAccordeonProps {
	titleProduct: string;
	product: string;
	quantity: number;
	content: AccordionContentProps;
}