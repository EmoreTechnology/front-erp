import React, { useState } from "react";
import { LoggedStyled } from './logged.styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Assets
import logo from "../../Assets/logo.png";
import iconHome from "../../Assets/icon-home.png";
import iconLogof from "../../Assets/icon-logof.png";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

//Components
import SideBar from "../../components/menu/menu";

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
                <FontAwesomeIcon icon={faAlignJustify} className="home"/>
              </a>
            </aside>
          </SideBar>}

          <button>
            <FontAwesomeIcon icon={faSignOutAlt} className="icon-off"/>
          </button>
        </div>

        <span />

        <img className="logo" src={logo} alt=""/>
      </div>
    </LoggedStyled>
  );
}

export default Logged;
