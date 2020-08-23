import styled from 'styled-components';

export const Container = styled.div`
	width: 80px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background: var(--dark);
	position: relative;
	padding: 32px 0;
`;

export const Logo = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	& > svg {
		font-size: 38px;
		color: #fff;
	}
`;

export const Menu = styled.ul`
	width: 100%;
	margin: 64px 0;
`;

export const MenuLink = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 24px 0;
	cursor: pointer;
	justify-self: flex-end;

	& svg {
		color: ${({ active }) => (active ? '#FFF' : 'rgba(240, 240, 240)')};
		font-size: 30px;
	}
`;
