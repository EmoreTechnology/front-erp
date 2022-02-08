// Dependencies
import React, { useState } from "react";

//Style
import { LoggedStyled } from './logged.styles';

//Assets
import logo from "../../Assets/logo.png";

//Components
import Accordion from "../../components/Accordeon/accordeon.component";

// Utils
import { accordionData } from "../../utils/mocks/accordeon";
import Navbar from "../../components/navbar/navbar.component";

function Logged() {

  return (
    <LoggedStyled>
      <div className="container">

        <Navbar />

        <span />

        <img className="logo" src={logo} alt=""/>
        {/**
         * 
				{accordionData.map((item) => (
					<Accordion title={item.title} content={item.content} />
				))}
         */}
      </div>
    </LoggedStyled>
  );
}

export default Logged;
