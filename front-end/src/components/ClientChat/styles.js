import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	/* height: 100%; */
    flex: 1;
	border-radius: var(--border-radius-2);
	display: flex;
	flex-direction: column;
`;

export const MessagesArea = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column-reverse;
	overflow: auto;
	border: 1px solid var(--input-border-hover);
	padding: 8px;
	border-radius: var(--border-radius-2);
`;

export const Message = styled.p`
	width: max-content;
	padding: 6px;
	border-radius: var(--border-radius-1);
	background: var(--primary);
	color: #fff;
	font-weight: 500;
	font-size: 14px;
	margin-bottom: 8px;
`;

export const Form = styled.form`
	width: 100%;
	padding: 12px 0;
	display: flex;
	justify-content: space-between;

	& > input {
		font-size: 16px;
		border-radius: var(--border-radius-1);
		padding: 12px;
		border: 1px solid var(--input-border);
		flex: 1;
		margin-right: 8px;
		height: 50px;
	}

	& > button {
		border-radius: var(--border-radius-1);
		width: 50px;
		height: 50px;
		background: var(--primary);

		& > svg {
			font-size: 30px;
			color: var(--white);
		}
	}
`;
