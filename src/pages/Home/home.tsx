import React from "react";
import { AppStyled } from './home.styles';

//Assets
import logo from "../../Assets/logo.png";

//Components
import Footer from "../../components/footer/footer";
import Slide from "../../components/slide/slide";
import Header from "../../components/header/header";


function Home() {
  return (
    <AppStyled>
      <div className="container">

        <Header />

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
