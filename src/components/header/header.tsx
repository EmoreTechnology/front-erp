// Styles
import { HeaderStyled } from './header.styles';

interface HeaderProps {
	onOpenLoginModal: () => void;
}

function Header({ onOpenLoginModal }: HeaderProps) {
	return (
		<HeaderStyled>
			<div className="header">
				<button className="button1" onClick={onOpenLoginModal}>
					<span>Login</span>
				</button>
			</div >
		</HeaderStyled>
	);
}

export default Header;
