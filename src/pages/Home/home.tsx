import React from "react";
import { AppStyled } from './home.styles.ts';
import logo from "../../Assets/logo.png";
import wpp from "../../Assets/whatsapp.png";
import linkedin from "../../Assets/linkedin.png";

function Home() {
  return (
    <AppStyled>
      <div className="container">

        <div className="header">
          <p>Login</p>
        </div>

        <div className="section1">
          <img src={logo} alt="" />
        </div>

        <div className="section2">
          <p>slide</p>
        </div>

        <div className="footer">
          <p>Fale Conosco</p>

          <div className="line"></div>

          <div className="contacts">
            <img className="wpp" src={wpp} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

      </div>

    </AppStyled>
  );
}

export default Home;
