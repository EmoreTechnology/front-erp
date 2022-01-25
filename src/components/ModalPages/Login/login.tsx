import React, { useState } from 'react';
import { LoginStyled } from './login.styles';

import { Input } from "../../Input/input";
import { ButtonLogin } from "../../Button/buton";
import logo from "../../../Assets/logo.png";
import Register from "../Cadastro/cadastro";


function Login({ children }: any) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <LoginStyled>
      <div className="container">

        <div className="close">{children}</div>

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
            <ButtonLogin appeareance="#fff" background-color="#fff">
              <span>Entrar</span>
            </ButtonLogin>
          </div>

          <div className="second">
            <ButtonLogin appeareance="#fff" background-color="#fff">
              <span onClick={() => setIsModalVisible(true)}>Cadastrar</span>
            </ButtonLogin>
            {isModalVisible ?
              <Register>
                <p className="close" onClick={() => setIsModalVisible(false)}>Close</p>
              </Register>
              : null}
          </div>

        </div>
      </div>
    </LoginStyled>
  );
}

export default Login;
