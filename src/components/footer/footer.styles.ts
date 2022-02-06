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
    flex-direction: row;
		width: 100%;
		border-top: solid 1px;
    height: 71px;
	
		p {
      justify-content: center;
			text-align: center;
			width: 100%;
			font-weight: 500;
      font-size: 12px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
 		}  
		
		.contacts {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;
			width: 100%;
      font-size: 12px;
		}
		
		img {
      display: flex;
      align-items: center;
      justify-content: flex-end;
			width: 38px;
			height: 38px;
      margin: 20px 0 20px 0;
		}

    .wpp {
      margin-right: 40px;
    }
	}
`;