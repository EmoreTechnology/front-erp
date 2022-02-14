import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';
import { IAccordeonProps } from '../utils/models/accordion.model';

export const ProdutosContext = createContext<IAccordeonProps[]>([]);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
	const [produtos, setProdutos] = useState<IAccordeonProps[]>([]);

	useEffect(() => {
		api.get('/api/produtos')
			.then(resp => setProdutos(resp.data.data));
	}, []);

	return (
		<ProdutosContext.Provider value={produtos}>{children}</ProdutosContext.Provider>
	);
}
