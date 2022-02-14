import React, { createContext, ReactNode } from 'react'
import { api } from '../services/api';

interface ProductsInput {
	data: {
		productTitle: string,
		quantity: number,
		description: string,
		price: number,
	}
}
interface CreateProductsData {
	createProducts: (produtos: ProductsInput) => void;
}

export const CreateProductsContext = createContext<CreateProductsData>({} as CreateProductsData);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {

	const createProducts = (produtos: ProductsInput) => {
		api.post('produtos', produtos)
	}

	return (
		<>
			<CreateProductsContext.Provider value={{ createProducts }}>{children}</CreateProductsContext.Provider>
		</>
	);
}
