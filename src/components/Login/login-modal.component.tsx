// Dependencies
import { useEffect } from 'react';
import Modal from 'react-modal';

// Styles
import { Container } from './login-modal.styles';

//Components
import { Input } from "../Input/input";
import { ButtonLogin } from "../Button/buton";

// Assets
import logo from "../../Assets/logo.png";

// Utils
import { api } from '../../services/api';

Modal.setAppElement("#root");

interface ILoginProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

function LoginModal({ isOpen, onRequestClose }: ILoginProps) {
	useEffect(() => {
		api.get('http://localhost:3000/api/login')
			.then(resp => resp.data)
	})

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
					backgroundColor: 'rgba(220, 220, 220, 30%)'
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
				<img src={logo} alt="" />

				<div className="input-email">
					<label> Email:</label>
					<Input className="email" type="email" appearance="#fff" />
				</div>

				<div className="input-password">
					<label> Senha:</label>
					<Input type="password" appearance="#fff" />
				</div>

				<p>Esqueci minha senha</p>


				<div className="button-access">
					<ButtonLogin appeareance="#fff" background-color="#fff">
						<span>Entrar</span>
					</ButtonLogin>
				</div>
			</Container>
		</Modal >
	);
}

export default LoginModal;