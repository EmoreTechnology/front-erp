// Dependencies
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Style
import { LoggedStyled } from './logged.styles';

//Assets
import logo from "../../Assets/logo.png";
import iconHome from "../../Assets/icon-home.png";
import iconLogof from "../../Assets/icon-logof.png";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//Components
import SideBar from "../../components/menu/menu";
import Accordion from "../../components/Accordeon/accordeon.component";

// Utils
import { accordionData } from "../../utils/mocks/accordeon";

function Logged() {

  const [on, setOn] = React.useState(false);

  const handleOn = () => {
    setOn(!on);
  };

  return (
    <LoggedStyled>
      <div className="container">
        <div className="navbar">
          <aside className={on ? '' : ''}>
            <a href="#" onClick={handleOn}>
              <FontAwesomeIcon icon={faAlignJustify} className="menu-open"/>
            </a>
          </aside>
          {on && <SideBar openClass="open">
            <aside className={on ? 'to-right' : ''}>
              <a href="#" onClick={handleOn}>
                <FontAwesomeIcon icon={faTimes} className="home"/>
              </a>
            </aside>
          </SideBar>}

          <button>
            <FontAwesomeIcon icon={faSignOutAlt} className="icon-off"/>
          </button>
        </div>

        <span />

        <img className="logo" src={logo} alt=""/>
        {/**
         * 
				{accordionData.map((item) => (
					<Accordion title={item.title} content={item.content} />
				))}
         */}
      </div>
    </LoggedStyled>
  );
}

export default Logged;
