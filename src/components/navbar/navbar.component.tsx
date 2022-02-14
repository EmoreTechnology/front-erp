// Dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import { NavbarStyled } from "./navbar.styles";

// Components
import SideBar from "../menu/menu";

// Assets
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Utils
import authService from "../../contexts/auth";

function Navbar() {

	const [on, setOn] = React.useState(false);

	const handleOn = () => {
		setOn(!on);
	};

	const logOut = () => {
		authService.logout();
	};

	return (
		<NavbarStyled>
			<div className="navbar">
				<aside className={on ? '' : ''}>
					<a href="#" onClick={handleOn}>
						<FontAwesomeIcon icon={faAlignJustify} className="menu-open" />
					</a>
				</aside>
				{on && <SideBar openClass="open">
					<aside className={on ? 'to-right' : ''}>
						<a href="#" onClick={handleOn}>
							<FontAwesomeIcon icon={faTimes} className="home" />
						</a>
					</aside>
				</SideBar>}

				<a href="/home" onClick={logOut}>
					<FontAwesomeIcon icon={faSignOutAlt} className="icon-off" />
				</a>
			</div>
		</NavbarStyled>
	);
}
export default Navbar;