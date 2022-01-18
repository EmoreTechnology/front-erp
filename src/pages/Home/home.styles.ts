import styled from 'styled-components';

export const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
	max-width: 1440px;
	height: 100%;
	background-color: black;
	color: white;

  .header {
    display: flex;
    flex-direction: column;
    height: 570px;
    width: 100%;

    .options{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      height: 100px;
      background-color: black;
      
      p {
        font-size: 1.8rem;
        margin-right: 5rem;
      }
    }

    img {
      width: 20rem;
      height: 20rem;
      margin: 5rem;
    }  
  }

  .section1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2.6rem 0 0 0;
    height: 15rem;
    width: 71rem;
    border: 1px solid #fff;
    border-radius: 1.8rem;    
    img {
      margin 2.5rem;
      width: 300px;
      height: 164px;
    }

    p {
      font-size: 1.8rem;
      margin-right: 15rem;
      margin-left: 10rem;
    }
  }
  
  .section2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2.6rem 0 0 0;
    height: 15rem;
    width: 71rem;
    border: 1px solid #fff;
    border-radius: 1.8rem;    
    img {
      margin 2.5rem;
      width: 300px;
      height: 164px;
    }
    
    p {
      font-size: 1.8rem;
      margin-right: 10rem;
      margin-left: 10rem;
    }
  }
  
  .section3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2.6rem 0 0 0;
    height: 15rem;
    width: 71rem;
    border: 1px solid #fff;
    border-radius: 1.8rem;    
    img {
      margin 2.5rem;
      width: 300px;
      height: 164px;
    }
    
    p {
      font-size: 1.8rem;
      margin-right: 9rem;
      margin-left: 5rem;
    }
  }
  .section4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 15rem;
    width: 71rem;
    margin: 2.6rem 0 0 0;
    border: 1px solid #fff;
    border-radius: 1.8rem;   
    
    h1 {
      font-size: 4rem;
    }
    
    p {
      font-size: 1.8rem;
      margin: 3rem;
    }
    
    b{
      color: black;
    }
  }
  .section5 {
    display: flex;
    flex-direction: row
    justify-content: center;
    align-items: center;
    margin: 2.6rem 0 0 0;
    height: 18rem;
    width: 82rem;
    border: 1px solid #fff;
    border-radius: 1.8rem;  
    
    .left {
      display: flex;
      flex-direction: column;
    }

    .right {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 10.8rem;
    }
  }
`;