// Dependencies
import React from "react";

// Styles
import { FooterStyled } from './footer.styles';

// Assets
import wpp from "../../Assets/wpp-icon.png";
import linkedin from "../../Assets/linkedin.png";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer">

        <p>Fale Conosco</p>

        <div className="contacts">
          <img className="wpp" src={wpp} alt="" />
          <img src={linkedin} alt="" />
        </div>

      </div>
    </FooterStyled>
  );
}

export default Footer;
