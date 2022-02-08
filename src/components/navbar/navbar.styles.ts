import styled from 'styled-components';

export const NavbarStyled = styled.div`
display: flex;
width: 100%;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100% !important;
    height: 50px;
    padding: 10px;
    
    button {
      background-color: black;
      border: none;
    }

    .menu-open,
    .icon-off {
      margin: 10px;
      height: 40px !important;
      width: 45px !important;
    }

    .home {
      height: 40px !important;
      width: 45px !important;
      margin-left: 100px;

      @media (min-width:768px) {
        margin-left: 75px;
      }
    }
    
    svg {
      color: #fff;
      width: 37px;
      height: 32px;
    }
  }
`;