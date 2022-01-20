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

  .section2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 650px;

    p {
      font-size: 48px;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 260px;
    border-top: solid 1px;

    p {
      margin: 0px 0px 40px 0px;
    }

    .contacts {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 100%;
    }

    img {
      width: 35px;
      height: 35px;;
    }

   .wpp {
      display: flex;
      background: white;
      width: 100%
      max-width: 45px;
      max-height: 45px;
      margin-right: 68px;
    }
  }
  img {
    width: 100%;
  }
  
`;