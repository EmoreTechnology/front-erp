// Dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Style
import { LoggedStyled } from './logged.styles';

//Assets
import logo from "../../Assets/logo.png";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Utils
import SideBar from "../../components/menu/menu";
import authService from "../../contexts/auth";
import Navbar from "../../components/navbar/navbar.component";

function Logged() {

	const [on, setOn] = React.useState(false);

	const handleOn = () => {
		setOn(!on);
	};

	const logOut = () => {
		authService.logout();
	};

	return (
		<LoggedStyled>
			<div className="container">
				<Navbar />

				<img className="logo" src={logo} alt="" />
			</div>
		</LoggedStyled>
	);
}

export default Logged;
