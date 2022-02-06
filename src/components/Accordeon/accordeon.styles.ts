import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	.accordion-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		cursor: pointer;
		background-color: gray;
	}

	.accordion-title:hover {
		background-color: #3ab4cc;
	}

	.accordion-title,
	.accordion-content {
		padding: 1rem;
	}

	.accordion-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #39b9d2;

		> p + p {
			margin-left: 30px;
		}
	}
`;