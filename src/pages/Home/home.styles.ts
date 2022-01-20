import styled from 'styled-components';

export const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
	width:100%;
	height: 100%;
	background-color: black;
	color: white;
  font-family:"Poppins";

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
	  width:100%;
  }

  .header {
    display: flex;
    width: 100%;
    margin: 30px 45px 30px 0px;
    justify-content: flex-end;
  }

  .section1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 650px;

    p {
      font-size: 48px;
      font-weight: 500;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 220px;
    border-top: solid 1px;
    
    @media (max-width: 360px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 71px;
      width: 100%;
    }
    
    p {
      text-align: center;
      font-weight: 500;
      margin-bottom: 40px;
      
      @media (max-width: 360px) {
        align-items: center;
        justify-content: center;
        font-size: 12px;
        margin-right: 25px;
      }  
    }  

    .line {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      width: 1px;
      background-color: white;

      @media (min-width: 360px){
        display: none;
      }
    }
    
    .contacts {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 100%;
      margin-bottom: 20px;
      
      @media (max-width: 360px) {
        align-items: center;
        justify-content: center;
        margin-left: 32px;
        margin-bottom: 0px;
        font-size: 12px;
      }
    }
    
    img {
      width: 38px;
      height: 38px;
      @media (max-width: 360px) {
        margin-right: 32px;
      }
    }
    
    .wpp {
      display: flex;
      background: white;
      width: 100%
      max-width: 45px;
      max-height: 45px;
      margin-right: 68px;
      @media (max-width: 360px) {
        margin-right: 52px;
      }
    }
  }
  img {
    width: 100%;
  }
  
`;