// Dependencies
import { useEffect } from 'react';
import Modal from 'react-modal';

// Styles
import { LoginStyled } from './login-modal.styles';

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
		<LoginStyled>
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
			>

				<div className="container">
					<div className="header login">
						<img src={logo} alt="" />
					</div>

					<div className="form">
						<div className="section1">
							<label> Email:</label>
							<Input className="email" type="email" appearance="#fff" />
						</div>

						<div className="section2">
							<label> Senha:</label>
							<Input type="password" appearance="#fff" />
						</div>

						<p>Esqueci minha senha</p>
					</div>

					<div className="footer login">

						<div className="first">
							<ButtonLogin appeareance="#fff" background-color="#fff">
								<span>Entrar</span>
							</ButtonLogin>
						</div>
					</div>
				</div>
			</Modal>
		</LoginStyled>
	);
}

export default LoginModal;
