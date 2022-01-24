import { AppStyled } from './../../pages/Home/home.styles';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

      .header {
        display: flex;
        width: 100%;
        margin: 30px 45px 30px 0px;
        justify-content: flex-end;
      }

      button {
        display: flex;
        border: none;
        color: white;
        font-size: 16px;
        background-color: black;

        span {
          color: white;
          font-size: 16px;
        }
      }


`;