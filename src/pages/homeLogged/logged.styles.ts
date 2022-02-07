import styled from 'styled-components';

export const LoggedStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
	width: 100%;
	color: white;
  font-family:"Poppins";
  
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding:10px;
  }
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1px;
    width: 100%;
    background-color: white;
  }
  
  .logo {
    width: 100%;
    max-width: 922px;
    margin: 104px 0 104px 0;
    background: rgba(0, 0, 0, 0.5);
  } 
  
  .opneSidebar {
    transition: 0.7s;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .to-right {
    display: flex;
    margin: 25px 0 20px 40px;  

    @media (min-width:768px) {    
    margin: 25px 0 20px 210px;
    }

    @media (min-width:1440px) {    
    margin: 25px 0 20px 210px;
    }
  }
`;