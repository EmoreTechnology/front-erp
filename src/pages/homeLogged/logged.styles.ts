import styled from 'styled-components';

export const LoggedStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
	width: 100%;
	background-color: black;
	color: white;
  font-family:"Poppins";
  
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    
    @media (min-width: 768px) {
      padding: 15px;
    }
    @media (min-width: 1440px) {
      padding: 25px;
    }
    
    button {
      background-color: black;
      border: none;
    }
    
    .home {
      margin-left: 12px;
      
      @media (min-width: 768px) {
        margin-left: 20px;
        width: 46px;
        height: 50px;
      }
      @media (min-width: 1440px) {
        margin-left: 30px;
        width: 56px;
        height: 60px;
      }
    }
    
    .logof {
      margin-right: 12px;
      
      @media (min-width: 768px) {
        margin-right: 20px;
        width: 37px;
        height: 32px;
      }
      @media (min-width: 1440px) {
        margin-right: 30px;
        width: 47px;
        height: 42px;
      }
    }
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
    
    @media (min-width: 768px) {
      margin: 200px 0 200px 0;
    }
  } 
  
  .opneSidebar {
    transition: 0.7s;
    width: 180px;
    height: 100%;
    
    @media (max-width: 360px) {
      width: 40px;
    }
  }

  .to-right {
    margin-left: 220px;
    transition: all 300ms ease-in-out;

    @media (max-width:360px) {
      margin-left: 80px;
    } 
  }
}
`;