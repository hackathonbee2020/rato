import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
    background: whitesmoke;
`;

export const FormWrapper = styled.div`
	width: 400px;
	padding: 24px;
    background: var(--white);
	border-radius: var(--border-radius-1);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	& > h1 {
		color: var(--heading-1);
		margin-bottom: 24px;
		font-size: 26px;
	}

	& > form {
		width: 100%;
		grid-template-columns: 1fr;
	}
`;
