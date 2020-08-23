import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	margin-bottom: 32px;

	& > header {
		width: 100%;
		margin-bottom: 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > h1 {
			font-size: 28px;
			color: var(--heading-1);
		}
	}
`;

export const TableWrapper = styled.div`
	width: 100%;
	padding: 16px;
	border-radius: var(--border-radius-1);
	background: var(--white);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
