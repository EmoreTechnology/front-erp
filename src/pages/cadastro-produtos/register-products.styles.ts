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
		justify-content: space-between;
		padding: 24px;

		> .buttons {
			display: flex;
			flex-direction: row;

			> .register {
				background: #4361EE;
				color: #FFFFFF;
			}

			> .filter {
				background-color: rgb(117 111 111 / 0.3);
    		color: black;
			}

			button {
				border-radius: 6px;
				height: 40px;
				width: 120px;
				border: none;
				cursor: pointer;
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

  p {
    color: black;
    font-size: 56px;
  }

	button {
		height: 40px;
		width: 120px;
	}
`;