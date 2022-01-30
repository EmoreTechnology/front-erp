import styled from 'styled-components';

export const LoginStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border: 1px solid white;
      background-color: black;
      color: white;
      width: 100%;

			.header.login {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				margin: 0;
				
				img {
					width: 100%;
					max-width: 450px;
				}
			}

        .form {
          display: flex;
          flex-direction: column;
          align-items: end;
          width: 100%;
          max-width: 750px;
          padding: 15px;

          input {
            width: 100%;
            max-width: 750px;
            
            @media (max-width:768px) {
              height: 30px;
            }
          }
          
          
          .section1{
            display:flex;
            align-items: start;
            flex-direction: column;
            width: 100%;
            margin-bottom: 100px;
            padding: 10px;
            
            @media (max-width:768px) {
              margin-bottom: 36px;
            }
          }
          
          .section2{
            display:flex;
            align-items: start;
            flex-direction: column;
            width: 100%;
            padding: 7px;
          }
          
          label{
            display: flex;
            margin: 0 0 8px 5px;

            @media (max-width:1024px){
              font-size: 14px;
            }
            @media (max-width:360px){
              font-size: 12px;
            }
          }
          
          p {
            display: flex;
            margin: 10px 0 100px 0;
            
            @media (max-width:1024px){
              font-size: 14px;
            }
            @media (max-width:360px){
              font-size: 12px;
            }
          }
          
        } 
        
        .footer.login {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 768px;
          margin-bottom: 20px;
          
          @media (max-width:360px) {
            display: flex;
            flex-direction: column;  
          }
          @media (max-width:1024px) {
            display: flex;
            justify-content: space-between; 
          }
          
          button {
            background-color: #fff;
            
            @media (max-width:768px) {
              max-width: 148px;
              height: 38px;
            }
            @media (max-width:360px) {
              width: 168px;
              height: 38px;
            }
            @media (max-width:1024px) {
              max-width: 257px;
            }
          }
          
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: #fff;
            color: black;
          }
          
          .first{
            display:flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 16px;
          }
          
          .second{
            display:flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 16px;
          }
        }
        
      }
`;