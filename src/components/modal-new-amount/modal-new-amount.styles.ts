import { accordionData } from './../../utils/mocks/accordeon';
import styled from "styled-components";

export const Container = styled.div `
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

    > .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      > svg {
        width: 35px;
        height: 35px;
      }

      h2 {
        font-size: 35px;
      }
    }

    > .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;

      > input {
        display: flex;
        width: 100%;
        height: 58px;
        border-radius: 8px;
        background: white;
        color: #000;
        border: 1px solid #7D7D7D;
      }
    
      > label {
        display: flex;
        margin: 20px 0 5px 0;
      }

      > .buttons {
        display: flex;
        align-items: end;
        justify-content: flex-end;
        width: 100%;
        margin-top: 8px;
        
        button {
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
  }


`;