import styled from 'styled-components';

export const UserStyled = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    right: 0px;
    left: 0;
    top: 0;
    z-index: 10;
    margin: 135px 0px 0px 85px;

    @media (min-width:768px) {
      margin: 135px 0px 0px 225px;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: start;
      text-align: start;
      flex-direction: column;
      width: 180px;
    }
    
    a {
      color: #9D9090;
      font-size: 12px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
    
    span {
      margin-top: 0px;
    }

    .section {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      height: 40px;
      cursor: pointer;

      :hover {
        background-color: #818181;
        
        a {
          color: #fff;
        }
      }
    }

    .leave {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      width: 100%;
      margin-top: 30px;
      cursor: pointer;
    }
`;