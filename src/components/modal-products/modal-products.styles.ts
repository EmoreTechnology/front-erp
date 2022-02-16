import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	background-color: #FFFFFF;
	border-radius: 16px;

	.react-modal-content {
    display: flex;
    align-items: start !important;
    width: 100%;
  }

	> div {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 28px;
		opacity: 0.8;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #004E89 0%, rgba(0, 78, 137, 0) 100%);
    border-radius: 16px;

		> p {
      color: white;
		}

    h2 {
      font-size: 40px;
    }

		> form {
      display: flex;
			flex-direction: column;
			width: 100%;
      
      @media (min-width: 768px) {
        flex-direction: row;
      }

			> .left {
				display: flex;
				flex-direction: column;
				width: 100%;

				> label {
					margin: 20px 0 5px 0;
					color: #000000;
				}

				> input {
					display: flex;
					width: 100%;
					height: 30px;
					border-radius: 8px;
					background: white;
					color: #000;
  				border: 1px solid #7D7D7D;

          @media (min-width: 768px) {
            height: 58px;
          }
				}
				
				> .select {
					margin: 20px 0 0px 0;
          
          p {
            margin-bottom: 5px;
          }
				}
			}
      
			> .right {
        display: flex;
				flex-direction: column;
				width: 100%;
        
				> label {
					margin: 20px 0 5px 0;
					color: #000000;
				}
				
				> input {
          display: flex;
					width: 100%;
					height: 30px;
					border-radius: 8px;
					background: white;
					color: #000;
  				border: 1px solid #7D7D7D;

          @media (min-width: 768px) {
            height: 58px;
          }
				}
        
        > p {
          display: flex;
          align-items: center;
          background-color: #fff;
          border-radius: 8px;
          border: 1px solid #7D7D7D;
          height: 30px;

          @media (min-width: 768px) {
            height: 58px;
          }
        }

				> .select {
					margin: 20px 0 0px 0;
          
          p {
            margin-bottom: 5px;
          }
				}

				> .buttons {
					display: flex;
					align-items: end;
					justify-content: flex-end;
					width: 100%;
					margin-top: 8px;
					
					> button {
						width: 95px;
						height: 40px;
						background-color: #fff;
            border: 1px solid #7D7D7D;
						border-radius: 12px;
						cursor: pointer;
					}
					
					> button:hover {
						background-color: #DCDCDC;
					}
				}
			}

			> div + div {
        display: flex;

        @media (min-width: 768px) {
          margin-left: 22px;
        }
			}
		}
	}
`;