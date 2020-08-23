import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background: var(--white);
	border-radius: var(--border-radius-1);
	padding: 24px;
	display: flex;
	flex-direction: column;

	& > h1 {
		color: var(--heading-1);
		font-size: 28px;
		margin-bottom: 16px;
	}
`;

export const Chat = styled.div`
	height: 100%;

	& .chat-container {
		border: 2px solid red !important;
	}
`;

export const ConversationsList = styled.ul`
	grid-area: UL;
	height: 100%;
	border-right: 1px solid rgba(20, 20, 20);
`;

export const Conversation = styled.li`
	display: flex;
	padding: 16px;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;

	&:hover {
		background: rgba(190, 190, 190);
	}

	& > img {
		margin-right: 16px;
		width: 50px;
		height: 50px;
		border-radius: 100%;
	}

	& > div {
		display: flex;
		flex-direction: column;

		& > h3 {
			color: var(--heading-1);
			font-weight: 500;
			font-size: 17px;
			margin-bottom: 8px;
		}

		& > p {
			font-size: 16px;
			color: var(--heading-1);
		}
	}
`;

export const PendingConversations = styled.ul`
	width: 100%;
	border: 1px solid var(--input-border);

	& > li {
		width: 100%;
		padding: 32px;
		border-top: 1px solid var(--input-border);
		cursor: pointer;

		&:hover {
			background: #dedede;
		}

		& > strong {
			font-size: 18px;
			color: var(--heading-1);
			margin-bottom: 8px;
		}

		& > p {
			color: var(--body-1);
			font-size: 16px;
		}

		&:first-child {
			border: none;
		}
	}
`;

export const ModalContent = styled.div`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	background: var(--white);
	border-radius: var(--border-radius-1);
	padding: 24px;
	width: 500px;

	& > h1 {
		font-size: 22px;
		color: var(--heading-1);
		margin-bottom: 16px;
	}

	& form > div.buttons {
		grid-column: span 4;
		display: flex;
		justify-content: flex-end;

		& button:last-child {
			margin-left: 8px;
		}
	}
`;

export const ConversationPreview = styled.div`
	width: 100%;
	height: 600px;
	flex: 1;
	border-radius: var(--border-radius-2);
	display: flex;
	flex-direction: column;

	& > div {
		overflow-y: auto;
		flex: 1;
		margin-bottom: 8px;
		flex: 1;
		display: flex;
		flex-direction: column-reverse;
		overflow: auto;
		border: 1px solid var(--input-border-hover);
		padding: 8px;
		border-radius: var(--border-radius-2);

		& > p {
			width: max-content;
			padding: 6px;
			border-radius: var(--border-radius-1);
			background: var(--primary);
			color: #fff;
			font-weight: 500;
			font-size: 14px;
			margin-bottom: 8px;
		}
	}
`;
