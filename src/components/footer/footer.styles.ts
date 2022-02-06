import styled from 'styled-components';

export const FooterStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	position: absolute;
	bottom: 0;
	
	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		border-top: solid 1px;
		padding: 10px;
	
		@media (max-width: 360px) {
			flex-direction: row;
			align-items: center;
			justify-content: center;
			height: 71px;
			width: 100%;
		}
	
		p {
			width: 100%;
			text-align: center;
			font-weight: 500;
			margin-bottom: 40px;
			
			@media (max-width: 360px) {
				text-align: center;
				justify-content: center;
				margin-top: 40px;
				font-size: 12px;
			}  
		}  

		.line {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 44px;
			width: 1px;
			background-color: white;

			@media (min-width: 360px){
				display: none;
			}
		}
		
		.contacts {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;
			width: 100%;
			
			@media (max-width: 360px) {
				align-items: center;
				justify-content: center;
				font-size: 12px;
			}
		}
		
		img {
			width: 38px;
			height: 38px;   

			@media (max-width: 360px) {
				align-items: center;
				justify-content: flex-end;
			}
		}
		
		.wpp {
			display: flex;
			margin-right: 60px;
			background: white;
			width: 100%;
			max-width: 45px;
			max-height: 45px;

			@media (max-width: 360px) {
				align-items: center;
				justify-content: flex-end;
				margin-right: 25px;
			}
		}
	}
`;