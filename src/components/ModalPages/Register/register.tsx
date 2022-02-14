
import { CadastroStyled } from './register.styles';
import React, { useState } from "react";

import { Input } from "../../Input/input.component";
import { ButtonLogin } from "../../Button/buton";
import logo from "../../../Assets/logo.png";
import { onRegister } from '../../../contexts/auth';


const Register = ({ children }: any) => {

  const [{ email, password, repeatPassword}, setRegisterData] = useState({
    email: '',
    password: '',
    repeatPassword: '' 
  })

  const [error, setError] = useState('')

  const register = async (event: React.FormEvent) => {
    event.preventDefault();
    if(password === repeatPassword) {
     await onRegister({
        email,
        password
    })
    }
  }

  return (
    <CadastroStyled>
      <form onSubmit={register} className="container">
        <div className="close">{children}</div>

        <div className="header login">
          <img src={logo} alt="" />
        </div>

        <div className="register">

          <div className="section2">
            <label htmlFor="email">Nome:</label>
            <Input value={email} name="email" onChange={(event) => setRegisterData({
              email: event.target.value,
              password,
              repeatPassword
            })} type="text" appearance="#fff" />
          </div>
          
          <div className="section2">
            <label htmlFor="email">E-mail:</label>
            <Input type="email" appearance="#fff" />
          </div>

          <div className="section3">
            <label htmlFor="password">Senha:</label>
            <Input value={password} name="password" onChange={(event) => setRegisterData({
              email,
              password: event.target.value,
              repeatPassword
            })} type="password" appearance="#fff" />
          </div>

          <div className="section4">
            <label htmlFor="repeatPassword">Repita sua senha:</label>
            <Input  value={repeatPassword} name="repeatPassword" onChange={(event) => setRegisterData({
              email,
              password,
              repeatPassword: event.target.value
            })} type="password" appearance="#fff" />
          </div>

        </div>

        <div className="registrar">
            <ButtonLogin type="submit" appeareance="#fff" background-color="#fff">
              <span>Entrar</span>
            </ButtonLogin>
            {error.length > 0 && <b>{error}</b>}
        </div>
      </form>
    </CadastroStyled>
  );
}

export default Register;
