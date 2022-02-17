// Styles
import styled from 'styled-components';

export const RegisterProdutsStyled = styled.div`
  display: flex;
	flex-direction: column;
	background-color: #ECF0F5;
	width: 100%;
	height: 100%;

	> .header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		padding: 10px;

    > h1 {
      font-size: 18px;

      @media (min-width: 768px) {
        font-size: 38px;
      }      
    }

		> .buttons {
			display: flex;
			flex-direction: row;
      width: 100%;
      justify-content: end;
      margin-right: 20px;

			> .register {
        background: #4361EE;
				color: #FFFFFF;
			}
      
			> .filter {
        background-color: rgb(117 111 111 / 0.3);
    		color: black;
			}

			> .new-amount {
        background-color: rgb(117 111 111 / 0.3);
    		color: black;
			}
      
			button {
        border-radius: 6px;
				height: 40px;
				width: 100%;
				border: none;
				cursor: pointer;

        @media (min-width: 768px) {
          width: 120px
        }
			}
			
			button + button {
				margin-left: 4px;
			}
		}
	}
	span {
		width: 100%;
		border: 1px solid #000000;
	}

	> .wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: 14px 24px;

		> .items {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 71%;
			
			> p {
				font-size: 18px;
			}
		}
	}

	button {
		height: 40px;
		width: 120px;
	}

  .opneSidebar {
    transition: 0.7s;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .menu-open {
    color: #000 !important;
    margin: 0px !important;
  }
  
  .accordion-content{
    display: list-item;

  .to-right {
    display: flex;
    margin: 25px 0 20px 120px;  
    
    @media (min-width:768px) {    
      margin: 25px 0 20px 270px;
    }
    
    @media (min-width:1440px) {    
      margin: 25px 0 20px 280px;
    }

    svg {
      color:#000;
    }
  }
`;