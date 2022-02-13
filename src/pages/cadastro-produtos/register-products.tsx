// Dendencies
import React, { useState } from 'react';
import Accordeon from '../../components/Accordeon/accordeon.component';
import ModalRegisterProducts from '../../components/modal-products/modal-products.components';
import { accordionData } from '../../utils/mocks/accordeon';

// Styles
import { RegisterProdutsStyled } from './register-products.styles';

const RegisterProducts: React.FC = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

	function handleOpenLoginModal() {
		setIsLoginModalOpen(!isLoginModalOpen);
	}

	const handleOpenFilterModal = () => {
		console.log('clicou no filtro');
	}

	return (
		<RegisterProdutsStyled>
			<div className="header">
				<p>Register Products</p>

				<ModalRegisterProducts isOpen={isLoginModalOpen} onRequestClose={handleOpenLoginModal} />

				<div className="buttons">
					<button className="register" onClick={handleOpenLoginModal}>Cadastrar</button>

					<button className="filter" onClick={handleOpenFilterModal}>Filtrar</button>
				</div>

			</div>

			<span />

			<div className="wrapper">
				<div className="items">
					<p>Código</p>

					<p>Produto</p>

					<p>Quantidade</p>

				</div>
			</div>

			<div>
				{accordionData.map((item) => (
					<Accordeon titleProduct={item.titleProduct} content={item.content} product={item.product} quantity={item.quantity} />
				))}
			</div>
		</RegisterProdutsStyled>
	);
}

export default RegisterProducts;