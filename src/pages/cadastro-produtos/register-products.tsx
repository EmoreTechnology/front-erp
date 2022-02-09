// Dendencies
import React, { useState } from 'react';
import ModalRegisterProducts from '../../components/modal-products/modal-products.components';

// Styles
import { RegisterProdutsStyled } from './register-products.styles';

const RegisterProducts: React.FC = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

	function handleOpenLoginModal() {
		setIsLoginModalOpen(!isLoginModalOpen);
	}

	return (
		<RegisterProdutsStyled>
			<p>Register Products</p>

			<ModalRegisterProducts isOpen={isLoginModalOpen} onRequestClose={handleOpenLoginModal} />

			<button onClick={handleOpenLoginModal}>Cadastrar</button>
		</RegisterProdutsStyled>
	);
}

export default RegisterProducts;