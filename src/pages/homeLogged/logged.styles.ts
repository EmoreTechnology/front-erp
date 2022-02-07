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
  
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 40px;
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

    .menu-open,
    .icon-off {
      margin: 20px;
      height: 40px !important;
      width: 45px !important;
    }

    .home {
      margin-left: 100px;

      @media (min-width:768px) {
        margin-left: 75px;
      }
    }
    
    svg {
      color: #fff;
      width: 47px;
      height: 42px;
      margin-right: 15px;      
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
  } 
  
  .opneSidebar {
    transition: 0.7s;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .to-right {
    display: flex;
    margin: 20px 0 20px 40px;  

    @media (min-width:768px) {    
    margin: 25px 0 20px 210px;
    }

    @media (min-width:1440px) {    
    margin: 30px 0 20px 210px;
    }
  }
`;