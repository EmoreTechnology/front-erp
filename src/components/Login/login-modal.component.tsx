// Dependencies
import { SyntheticEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

// Styles
import { Container } from './login-modal.styles';

//Components
import { ButtonLogin } from "../Button/buton";

// Assets
import logo from "../../Assets/logo.png";

// Utils
import { IFormData } from '../../contexts/auth.model';

//Hooks
import authService from '../../contexts/auth';

Modal.setAppElement("#root");

interface ILoginProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

function LoginModal({ isOpen, onRequestClose }: ILoginProps) {
	const emailRef = useRef<any>(null);
	const passwordRef = useRef<any>(null);

	const navigate = useNavigate();

	const handleLoggedUser = async (e: SyntheticEvent) => {
		e.preventDefault();

		const data: IFormData = {
			identifier: String(emailRef.current?.value),
			password: String(passwordRef.current?.value)
		}

		try {
			await authService.login({ identifier: data.identifier, password: data.password }).then(
				() => {
					navigate('/logged');
					window.location.reload();
				},
				(error) => {
					console.log(error);
				}
			);
		} catch (err) {
			console.log(err);
		}
	}

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
			<Container onSubmit={handleLoggedUser}>
				<img src={logo} alt="" />

				<div className="input-email">
					<label> Email:</label>

					<input
						type="email"
						ref={emailRef}
					/>
				</div>

				<div className="input-password">
					<label> Senha:</label>

					<input
						type="password"
						ref={passwordRef}
					/>
				</div>

				<p>Esqueci minha senha</p>

				<div className="button-access">
					<ButtonLogin appeareance="#fff" background-color="#fff" type="submit" >
						<span>Entrar</span>
					</ButtonLogin>
				</div>
			</Container>
		</Modal >
	);
}

export default LoginModal;