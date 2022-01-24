import React, { useState }from "react";
import { HeaderStyled } from './header.styles';

//assets
import logo from "../../Assets/logo.png";


function Header() {

  return (
    <HeaderStyled>
      <div className="header login">

        <div className="section1">
          <img src={logo} alt="" />
        </div>

      </div>
    </HeaderStyled>
  );
}

export default Header;
