import React from "react";
import { AppStyled } from './home.styles.ts';

//Assets
import logo from "../../Assets/logo.png";

//Components
import Footer from "../../components/footer/footer";
import Slide from "../../components/slide/slide";



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

        <Slide />
        
        <Footer />
      </div>

    </AppStyled>
  );
}

export default Home;
