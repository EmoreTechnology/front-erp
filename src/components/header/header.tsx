// Styles
import { HeaderStyled } from './header.styles';

interface HeaderProps {
	onOpenLoginModal: () => void;
}

function Header({ onOpenLoginModal }: HeaderProps) {
	return (
		<HeaderStyled>
			<div className="container">

				<div className="header">
					<button className="button1" onClick={onOpenLoginModal}>
						<span>Login</span>
					</button>
				</div >
			</div>
		</HeaderStyled>
	);
}

export default Header;
