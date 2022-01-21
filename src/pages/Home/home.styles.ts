import styled from 'styled-components';

export const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
	width:100%;
	height: 100%;
	background-color: black;
	color: white;
  font-family:"Poppins";

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
	  width:100%;
  }

  .header {
    display: flex;
    width: 100%;
    margin: 30px 45px 30px 0px;
    justify-content: flex-end;
  }

  .section1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
  }
  
`;