import styled from 'styled-components';

export const LoggedStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
	color: white;
  font-family:"Poppins";
  
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
    margin: 25px 0 20px 120px;  

    @media (min-width:768px) {    
    margin: 25px 0 20px 270px;
    }

    @media (min-width:1440px) {    
    margin: 25px 0 20px 280px;
    }
  }
`;