import styled from 'styled-components';

export const RequestsStyled = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 180px;
    position: absolute;
    right: 0px;
    left: 0;
    top: 0;
    z-index: 10;
    margin: 235px 0px 0px 225px;

    @media (max-width:768px) {
      margin: 205px 0px 0px 225px;
    }
    @media (max-width:360px) {
      margin: 205px 0px 0px 85px;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media (max-width:360px) {
        width: 180px;
      }
    }
    
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;    
      background-color: transparent !important;
      border: none;
    }
    
    p {
      color: #9D9090;
    }
    
    img {
      margin: 10px;
    }
    
    span {
      margin-top: 0px;

      @media (max-width:360px) {
        display: flex !important;
      }
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