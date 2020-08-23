import styled from 'styled-components';

export const Container = styled.section`
	padding: 32px;
	width: 100%;
	overflow: auto;
	background: var(--workspace);

	@media(max-width: 768px) {
		padding: 24px;
	}

	@media(max-width: 512px) {
		padding: 24px 12px;
	}

	@media(max-width: 415px) {
		padding: 24px 8px;
	}
`;