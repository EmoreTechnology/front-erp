import React from "react";
import { AppStyled } from './home.styles.ts';
import logo from "../../Assets/logo.png";
import Footer from "../../components/Footer/footer";


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

        <Footer />
      </div>

    </AppStyled>
  );
}

export default Home;
