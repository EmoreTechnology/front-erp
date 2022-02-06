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
		border-top: solid 1px;
	
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
			margin: 15px 0 0 0;
			
			@media (max-width: 360px) {
        text-align: center;
				justify-content: center;
				font-size: 12px;
        margin: 0;
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
      margin: 20px 0 20px 0;

			@media (max-width: 360px) {
				align-items: center;
				justify-content: flex-end;
			}
		}

    .wpp {
      margin-right: 40px;
    }

	}
`;