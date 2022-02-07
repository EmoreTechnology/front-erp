import { AppStyled } from '../../../pages/Home/home.styles';
import styled from 'styled-components';

export const CadastroStyled = styled.div`
    display: flex;
    align-items: top;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: rgb(198 201 221 / 30%);
    z-index: 10;

    
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border: 1px solid white;
      background-color: black;
      color: white;
      width: 80%;

      .close{
        align-items: center;
        justify-content: center;
        height:10px;
        width:50px;
        border-radius: 8px;

        p {         
          background-color: black;
          color: #fff;
          font-size: 18px;
        }
      }

      .header.login {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 15px;
          
        img {
          width: 100%;
          max-width: 787px;
          max-height: 376px;
          margin: 0px;
        }
      }

      
      .register {
        display: flex;
        width: 100%;
        max-width: 750px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-top: 40px;
        
        input {
          width: 100%;
          max-width: 750px;
          height: 50px;
          margin-bottom: 20px;

          @media (min-width:1024px){
            height: 32px;
          }
        }
        
        .section1,
        .section2,
        .section3,
        .section4 {
          flex-direction: column;
          width: 100%;
        }
        
        label {
          display: flex;
          margin-bottom: 7px;

          @media (min-width:1024px){
            font-size: 14px;
          }
        }
      }
      .registrar{
        display: flex;
        margin: 25px 0 60px 0;
        max-width: 174px;
        width: 100%;
      }

      button {
        max-width: 174px;
        width: 100%;
        height: 50px;
      }
    } 
`;