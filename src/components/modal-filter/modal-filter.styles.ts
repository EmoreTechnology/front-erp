import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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

    input {
      display: flex;
      width: 100%;
      height: 58px;
      border-radius: 8px;
      background: white;
      color: #000;
      border: 1px solid #7D7D7D;
    }

    label {
      display: flex;
      margin: 20px 0 5px 0;
    }
    
    > .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: start;
      justify-content: start;
      
      > .category {
        display: flex;
        width: 100%;
        flex-direction: column;
        
        > .section {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: space-between;

          button {
            width: 140px;
            height: 60px;
            background-color: #fff;
            border: 1px solid #7D7D7D;
            border-radius: 12px;
            cursor: pointer;

            @media (min-width: 768px) {
              width: 180px;
            }
      
            :hover {
              background-color: #4361EE;
            }
          }        
        }
      }
      
      > .time-course {
        display: flex;
        width: 100%;
        flex-direction: column;
        
        > .section {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: space-between;
        }

        input {
          max-width: 138px;

          @media (min-width: 768px) {
            max-width: 180px;
          }
        }
      }

      > .buttons {
        display: flex;
        align-items: center;
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

          :hover {
            background-color: #DCDCDC;
          }
        }        
      }
    } 
  }
`;