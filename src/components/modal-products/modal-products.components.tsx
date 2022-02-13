import React from 'react';
import Modal from 'react-modal';
import { Container } from './modal-products.styles';

Modal.setAppElement("#root");

interface IProductsModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}


const ModalRegisterProducts: React.FC<IProductsModalProps> = ({ isOpen, onRequestClose }) => {
	return (
		<Modal
			className={"react-modal-content"}
			overlayClassName={"ReactModalPortal"}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={{
				overlay: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					width: '100%',
					height: '100%',
					top: 0,
					bottom: 0,
					right: 0,
					left: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.7',
				},
				content: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
					width: '100%',
					maxWidth: '850px',
				}
			}}
		>
			<Container>
				<div>
					<p>oi modal de cadastro</p>
				</div>
			</Container>
		</Modal>
	);
}

export default ModalRegisterProducts;