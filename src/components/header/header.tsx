import React from "react";
import { HeaderStyled } from './footer.styles.ts';

function Header() {
  return (
    <HeaderStyled>
      <div className="footer">

        <p>Fale Conosco</p>

        <span className="line"></span>

        <div className="contacts">
          <img className="wpp" src={wpp} alt="" />
          <img src={linkedin} alt="" />
        </div>

      </div>
    </HeaderStyled>
  );
}

export default Header;
