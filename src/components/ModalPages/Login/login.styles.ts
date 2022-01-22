import styled from 'styled-components';

export const LoginStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        background-color: black;
        color: white;
        width: 90%;
        height: auto;

        .close {
          display: flex;
          padding: 15px;
          justify-content: end;
        }

        .form {
          display: flex;
          flex-direction: column;
          align-items: end;
          width: 100%;
          max-width: 750px;

          .section1{
            display:flex;
            align-items: start;
            flex-direction: column;
            width: 100%;
            margin-bottom: 100px;
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
          }

          .second{
            display:flex;
            width: 100%;
            padding: 16px;
          
          }
        }
        
      }
      

`;