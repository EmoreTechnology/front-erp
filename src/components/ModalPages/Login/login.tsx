import React from "react";
import { LoginStyled } from './login.styles';

import { Input } from "../../Input/input";
import { ButtonLogin } from "../../Button/buton";
import logo from "../../../Assets/logo.png";


function Login() {
  return (
    <LoginStyled >
      <div className="container">

        <div className="header login">
            <img src={logo} alt="" />
        </div>

        <div className="form">
          <div className="section1">
            <label> Email:</label>
            <Input className="email" type="email" appearance="#fff" />
          </div>

          <div className="section2">
            <label> Senha:</label>
            <Input type="password" appearance="#fff" />
          </div>

          <p>Esqueci minha senha</p>
        </div>

        <div className="footer login">

          <div className="first">
            <ButtonLogin appeareance="#fff">
              <p>Entrar</p>
            </ButtonLogin>
          </div>

          <div className="second">
            <ButtonLogin appeareance="#fff">
              <p>Cadastrar</p>
            </ButtonLogin>
          </div>

        </div>
      </div>
    </LoginStyled>
  );
}

export default Login;
