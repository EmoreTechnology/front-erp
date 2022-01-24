import { CadastroStyled } from './cadastro.styles';
import React from "react";

import { Input } from "../../Input/input";
import { ButtonLogin } from "../../Button/buton";
import logo from "../../../Assets/logo.png";


function Cad({ children }: any) {


  return (
    <CadastroStyled >
      <div className="container">

        <div className="close">{children}</div>


        <div className="header login">
          <img src={logo} alt="" />
        </div>

        <div className="register">

          <div className="section2">
            <label>Nome:</label>
            <Input type="email" appearance="#fff" />
          </div>

          <div className="section2">
            <label>E-mail:</label>
            <Input type="email" appearance="#fff" />
          </div>

          <div className="section3">
            <label>Senha:</label>
            <Input type="password" appearance="#fff" />
          </div>

          <div className="section4">
            <label>Repita sua senha:</label>
            <Input type="password" appearance="#fff" />
          </div>

        </div>

        <div className="registrar">
            <ButtonLogin appeareance="#fff" background-color="#fff">
              <p>Entrar</p>
            </ButtonLogin>
        </div>
      </div>
    </CadastroStyled>
  );
}

export default Cad;
