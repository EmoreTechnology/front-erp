import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	border-radius: 24px;
	color: white;
	background-color: black;
	padding: 40px;

	> img.logo {
		width: 100%;
		max-width: 450px;
	}
		
	> .input-email {
		display:flex;
		align-items: start;
		flex-direction: column;
		width: 100%;
		max-width: 750px;
		margin-bottom: 40px;
	}
			
	> .input-password {
		display: flex;
		align-items: start;
		flex-direction: column;
		width: 100%;
		max-width: 750px;
		margin-bottom: 40px;
	}
			
	label {
		display: flex;
		margin-bottom: 8px;
		font-size: 12px;

		@media (max-width:1024px){
			font-size: 14px;
		}
	}

	> .button-access {
		display:flex;
		justify-content: center;
		align-items: center;
		padding: 16px;
		width: 100%;
	}
`;