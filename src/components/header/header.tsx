import React from "react";
import { HeaderStyled } from './header.styles.ts';

function Header() {
  return (
    <HeaderStyled>
      <div className="container">

        <div className="header">
          <p>Login</p>
        </div>

      </div>
    </HeaderStyled>
  );
}

export default Header;
