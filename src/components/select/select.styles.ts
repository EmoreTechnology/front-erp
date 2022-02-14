// Styles
import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  width: 100%;
  border-radius: 8px;
  background: white;
  color: #000;
  border: 1px solid #7D7D7D;
  
  > select {
    display: flex;
    width: 100%;
    height: 30px;
    border-radius: 8px;
    background: white;
    color: #000;
    border: none;

    @media (min-width: 768px) {
      height: 58px;
    }
  }
`;