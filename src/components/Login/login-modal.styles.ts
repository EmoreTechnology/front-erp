import styled from 'styled-components';

export const Container = styled.form `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 24px;
  color: white;
  background-color: black;
  padding: 40px;

  .react-modal-content {
    display: flex;
    align-items: start !important;
  }

  > img {
    width: 100% !important;
    max-width: 650px;
  }
        
  > .input-email {
    display:flex;
    align-items: start;
    flex-direction: column;
    width: 100%;
    max-width: 750px;
    margin-bottom: 40px;
    
    input {
      display: flex;
      width: 100%;
      height: 40px;
      border-radius: 8px;
      background: white;
    }
  }

  > .input-password {
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 100%;
    max-width: 750px;
    margin-bottom: 40px;

    .pass-wrapper {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: end;
    }

    i {
      position: absolute;
      padding: 15px;
    }
    
    i:hover {
      color: #00fcb6;
      cursor: pointer;
    }

    path {
      color: #000;
    }
    
    input {
      display: flex;
      width: 100%;
      height: 40px;
      border: none;
      background: white;
      border-radius: 8px;
    }
  }
            
  label {
    display: flex;
    margin-bottom: 8px;
    font-size: 12px;
    
    @media (min-width:1024px){
        font-size: 14px;
    }
  }

  > .button-access {
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 100%;

    >.container {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`;