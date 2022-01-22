import React from "react";
import { LoginStyled } from './login.styles.ts';

//assets
import Header from "../../../components/ModalComponets/header";
import { Input } from "../../Input/input";
import { ButtonLogin } from "../../Button/buton";


function Login({ children }) {
  return (
    <LoginStyled >
      <div className="container">

        <div className="close">{children}</div>

        <Header />

        <div className="form">
          <div className="section1">
            <label> Email:</label>
            <Input className="email" type="email" appearance="#fff" />
          </div>

          <div className="section2">
            <label> Senha:</label>
            <Input type="email" appearance="#fff" />
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
