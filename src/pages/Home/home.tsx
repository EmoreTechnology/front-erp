// Dependencies
import { useState } from "react";

// Styles
import { AppStyled } from './home.styles';

//Components
import LoginModal from '../../components/Login/login-modal.component';

//Assets
import logo from "../../Assets/logo.png";

//Components
import Footer from "../../components/footer/footer";
import Slide from "../../components/slide/slide";
import Header from "../../components/header/header";
import Accordion from "../../components/Accordeon/accordeon.component";

// Utils
import { accordionData } from "../../utils/mocks/accordeon";

function Home() {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

	function handleOpenLoginModal() {
		setIsLoginModalOpen(true);
	}

	function handleCloseLoginModal() {
		setIsLoginModalOpen(false);
	}

	return (
		<AppStyled>
			<div className="container">

				<Header onOpenLoginModal={handleOpenLoginModal} />

				<LoginModal isOpen={isLoginModalOpen} onRequestClose={handleCloseLoginModal} />

				<div className="section1">
					<img src={logo} alt="" />
				</div>

				<Slide />

				{accordionData.map((item) => (
					<Accordion title={item.title} content={item.content} />
				))}

				<Footer />
			</div>
		</AppStyled>
	);
}

export default Home;
