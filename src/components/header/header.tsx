import React, { useState } from 'react';
import Login from '../ModalPages/Login/login';
import { HeaderStyled } from './header.styles';

function Header() {

const [isModalVisible, setIsModalVisible] = useState(false);


  return (
    <HeaderStyled>
      <div className="container" >

        <div className="header">
          <button  className="button1" onClick={() => setIsModalVisible(true)} >
            <span>Login</span>
          </button>

          {isModalVisible ? 
            <Login onClick={() => setIsModalVisible(true)} />
          : null}

        </div >

      </div>
    </HeaderStyled>
  );
}

export default Header;
