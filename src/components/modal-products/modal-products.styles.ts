import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 480px;
	background-color: #FFFFFF;
	border-radius: 16px;

	.react-modal-content {
    display: flex;
    align-items: start !important;
  }

	> div {
		display: flex;
		width: 100%;
		height: 100%;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #004E89 0%, rgba(0, 78, 137, 0) 100%);
		opacity: 0.6;

		> p {
			color: white;
		}
	}
`;