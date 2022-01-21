import React from "react";
import { FooterStyled } from './footer.styles.ts';
import wpp from "../../Assets/whatsapp.png";
import linkedin from "../../Assets/linkedin.png";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer">

        <p>Fale Conosco</p>

        <span className="line"></span>

        <div className="contacts">
          <img className="wpp" src={wpp} alt="" />
          <img src={linkedin} alt="" />
        </div>

      </div>
    </FooterStyled>
  );
}

export default Footer;
