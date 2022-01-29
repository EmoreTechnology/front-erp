import React, { useState } from "react";
import { LoggedStyled } from './logged.styles';

//Assets
import logo from "../../Assets/logo.png";
import iconHome from "../../Assets/icon-home.png";
import iconLogof from "../../Assets/icon-logof.png";
import iconUser from "../../Assets/icon-user.png";
import iconSupport from "../../Assets/icon-support.png";
import iconRequest from "../../Assets/icon-requests.png";
import iconProduct from "../../Assets/icon-products.png";
import iconFinancial from "../../Assets/icon-financial.png";
import iconBuy from "../../Assets/icon-buy.png";

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
          <aside className={on ? 'to-right' : ''}>
            <a href="#" onClick={handleOn}>
              <img className="home" src={iconHome} alt="" />
            </a>
          </aside>
          {on && <SideBar openClass="open"/>}

          <button>
            <img className="logof" src={iconLogof} alt=""/>
          </button>
        </div>

        <span/>

        <img className="logo" src={logo} alt=""/>
      </div>
    </LoggedStyled>
  );
}

export default Logged;
