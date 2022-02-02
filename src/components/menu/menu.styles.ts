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
    text-decoration: none;
  }
  
  nav a {
    display: flex;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: #202020;
    width: 180px;
    height: 100%;
    padding: 0 20px 20px 20px;
    
    @media (max-width:360px) {
      width: 50px;
      padding: 0 10px 10px 10px;
    }
  }
  
  .content{
    display: flex;
    flex-direction: column;
    width: 100%;
    
    @media (max-width:360px) {
      margin-right: 0px;
    }

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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0 5px 12px;
    
    p {
      color: #9D9090;
      
      @media (max-width:360px) {
        display: none;
      }
      @media (max-width:768px) {
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
    margin: 50px 20px 50px 0;

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
    
    @media (max-width:360px) {
      display: none !important;
    }
  }
  
  .select {
    display: flex;
    margin: 30px 0 10px 12px;
     
    @media (max-width:360px) {
      display: none;
    }
  }

}
`;