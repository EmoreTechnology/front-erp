import styled from 'styled-components';

export const MenuStyled = styled.div`

nav {
  background: #333;
  color: #fff;
  width: 0;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  overflow-x: hidden;
  padding: 20px
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

  .content{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 20px;

    @media (max-width:360px) {
      margin-right: 0px;
    }
  }
  
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
    :hover {
      background-color: #C4C4C4;
    }
  }
  
  .sections {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0 5px 12px;
    
    p {
      margin-left: 15px;
      color: #9D9090;
      
      @media (max-width:360px) {
        display: none;
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
    height: 40px;
    margin: 50px 20px 50px 0;
    
    :hover {
      background-color: #C4C4C4 !important;
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