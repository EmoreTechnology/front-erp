import styled from 'styled-components';

export const LoggedStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
	width: 100%;
	height: 100%;
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

    .menu-open {
      margin-left: 10px;
    }

    .home {
      margin-left: 100px;

      @media (max-width:768px) {
        margin-left: 75px;
      }
    }
    
    svg {
      color: #fff;
      width: 47px;
      height: 42px;
      margin-right: 15px;
      
      @media (max-width:768px) {
        margin-right: 7px;
        width: 27px;
        height: 22px;
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
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .to-right {
    display: flex;
    margin: 20px 0 20px 200px;  

    @media (max-width:360px) {    
      margin-left: 50px !important;
    }

    @media (max-width:768px) {    
    margin: 13px 0 20px 200px;
    }
}
`;