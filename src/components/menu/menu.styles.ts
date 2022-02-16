import styled from 'styled-components';

export const MenuStyled = styled.div`

nav {
  background: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  overflow-x: hidden;
    /* transition: 0.7s all ease-in-out; */
  }

  ul,
  li {
    list-style: none;
  }
  
  a {
    width: 100%;
    text-decoration: none;
    justify-content: center;
  }
  
  nav a {
    display: flex;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: #202020;
    height: 100%;
    width: 70px;
    
    @media (min-width:768px) {
      width: 180px;
      padding: 0 20px 20px 20px;
    }
  }
  
  .content{
    display: flex;
    flex-direction: column;
    width: 100%;

    svg {
      width: 25px;
      height: 25px;
    }
  }
  
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
    :hover {
      background-color: #818181;
        
      p {
        color: #fff;
      }
    }
  }
  
  .sections {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0 5px 0px;
    
    @media (min-width:768px) {
      display: flex;
      justify-content: start;
    }
    p {
      display: none;
      color: #9D9090;
      
      @media (min-width:768px) {
        display: flex;
        margin-left: 15px;
      }
    }
  }
  
  .close {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent !important;
    color: #fff;
    border: none;
    width: 100%;
    height: 50px;
    margin: 50px 0 50px 0;

    p {
      font-size: 18px;
    }
    
    :hover {
      background-color: #818181 !important;
        
      p {
        color: #fff;
      }
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  span {
    display: flex;
  }
  
  .select {
    display: none;
    margin: 30px 0 10px 12px;
    
    @media (min-width:768px) {
      display: flex;
    }
  }
`;