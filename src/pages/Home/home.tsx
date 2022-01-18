import React from 'react';
import { AppStyled } from './home.styles.ts';
import HomeBack from '../../Assets/home.png';
import Image1 from '../../Assets/image1.png';
import Image2 from '../../Assets/image2.png';
import Image3 from '../../Assets/image3.png';
import Image4 from '../../Assets/image4.png';
import iconInsta from '../../Assets/insta-icon.png';
import iconWpp from '../../Assets/wpp-icon.png';
import iconLinkedin from '../../Assets/linkedin-icon.png';

function Home() {
  return (
    <AppStyled>
      <div className="header" style={{ backgroundImage: `url(${HomeBack})`}}>
        <div className="options">
          <p>Login</p>
          <p>About us</p>
        </div>
        <img src={Image1} alt="" />
      </div>
      <div className="section1">
        <img src={Image2} alt="" />
        <p>Sistema de auxílio a gestão administrativa e financeira.</p>
      </div>
      <div className="section2">
        <p>Diversos relatórios interativos para o seu controle ser muito mais efetivo.</p>
        <img src={Image3} alt="" />
      </div>
      <div className="section3">
        <img src={Image4} alt="" />
        <p>Sistema seguro , cada usuário terá acesso conorme determinação do User ADM.</p>
      </div>
      <div className="section4">
        <h1>Emore Tecnology</h1>
        <p> <b>_____</b>Tem como princípio  fornecer informações do seu negócio da maneira mais acertiva para uma melhor tomada de decisão. </p>
      </div>
      <div className="section5">
        <div className="left">
          <p>Email: emore@outlook.com.br</p>
          <p>Contato: (000)0-0000-0000</p>
          <p>Site: www.emoretecnology.com.br</p>
        </div>
        <div className="'right">
          <img src={iconInsta} alt="" />
          <img src={iconWpp} alt="" />
          <img src={iconLinkedin} alt="" />
        </div>
      </div>

    </AppStyled>
  );
}

export default Home;
