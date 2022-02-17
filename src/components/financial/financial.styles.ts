import styled from 'styled-components';

export const FinancialStyled = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  right: 0px;
  left: 0;
  top: 0;
  z-index: 10;
  margin: 335px 0px 0px 85px;
  
  @media (min-width:768px) {
    margin: 335px 0px 0px 225px;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
  }
  
  a {
    align-items: center;
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
    align-items: center:
    justify-content: center;
    width: 100%;
    height: 40px;
    cursor: pointer;

    :hover {
      background-color: #818181;
      
      p {
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