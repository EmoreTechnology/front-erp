import React, { useState, useContext } from 'react';
import { LoginStyled } from './login.styles';
import { Input } from "../../Input/input";
import { ButtonLogin } from "../../Button/buton";
import logo from "../../../Assets/logo.png";
import Register from "../Register/register";
import { onLogin } from '../../../contexts/auth';

const Login: React.FC = ({ children }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  {/**
    const context = useContext(AuthContext);
   console.log(context);
 
   async function login() {
     const response = await api.post('/login', {
       email: 'example@email.com',
       password: '123456',
     });
     console.log(response);
   } 
  */} 
  const [{ email , password}, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState ('');

  const Login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onLogin({
      email,
      password
    })

    if (response && response.error) {
      setError(response.error);
    }
  }
  
  return (
    <LoginStyled>
      <form onSubmit={Login} className="container">

        <div className="close">{children}</div>

        <div className="header login">
          <img src={logo} alt="" />
        </div>

        <div className="form">
          <div className="section1">
            <label htmlFor="email"> Email:</label>
            <Input value={email} onChange={(event) => setCredentials ({
              email: event.target.value,
              password
            })} className="email" type="text" appearance="#fff" />
          </div>

          <div className="section2">
            <label htmlFor="password"> Senha:</label>
            <Input value={password}  onChange={(event) => setCredentials({
              email,
              password: event.target.value,
            })} type="password" appearance="#fff" />
          </div>

          <p>Esqueci minha senha</p>
        </div>

        <div className="footer login">

          <div className="first">
            <ButtonLogin type="submit" appeareance="#fff" background-color="#fff">
              <span>Entrar</span>
            </ButtonLogin>
            {error.length > 0 && <p>error</p>} 
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
      </form>
    </LoginStyled>
  );
}

export default Login;
