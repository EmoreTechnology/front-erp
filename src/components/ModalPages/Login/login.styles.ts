import styled from 'styled-components';

export const LoginStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    background: rgb(198 201 221 / 30%);
    z-index: 10;
    
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 40px;
      border: 1px solid white;
      background-color: black;
      color: white;
      width: 80%;

        .close {
          display: flex;
          padding: 15px;
          justify-content: end;
        }

        .header.login {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin: 0;
          
          img {
            width: 100%;
            max-width: 787px;
            max-height: 376px;
          }
        }


        .form {
          display: flex;
          flex-direction: column;
          align-items: end;
          width: 100%;
          max-width: 750px;

          input {
            width: 100%;
            max-width: 750px;
            
            @media (max-width:768px) {
              height: 30px;
            }
          }
          
          
          .section1{
            display:flex;
            align-items: start;
            flex-direction: column;
            width: 100%;
            margin-bottom: 100px;

            @media (max-width:768px) {
              margin-bottom: 46px;
            }
          }
          
          .section2{
            display:flex;
            align-items: start;
            flex-direction: column;
            width: 100%;
          }
          
          label{
            display: flex;
            margin: 0 0 8px 5px;
          }
          
          p {
            display: flex;
            text-align: flex-end;
          }
          
        } 
        
        .footer.login {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 210px;
          
          @media (max-width:360px) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;  
            margin: 68px;          
          }
          
          button {
            background-color: #fff;
            
            @media (max-width:768px) {
              max-width: 148px;
              height: 38px;
            }
            @media (max-width:360px) {
              max-width: 168px;
              height: 38px;
            }
            @media (max-width:1024px) {
              max-width: 257px;
            }
          }
          
          p {
            display: flex;
            background-color: #fff;
            color: black;
          }
          
          .first{
            display:flex;
            width: 100%;
            justify-content: flex-end;
            padding: 16px;
            
            @media (max-width:360px) {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            @media (max-width:1024px) {
              justify-content: start;
            }
          }
          
          .second{
            display:flex;
            width: 100%;
            padding: 16px;
          }
        }
        
      }
      

`;