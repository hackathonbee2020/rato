import styled, { css } from 'styled-components';
import { getButtonColor, getButtonColorOnHover } from '../../utils/helpers/styles';

export const Container = styled.button`
	grid-column: span ${({ size }) => size || 1};
	border-radius: var(--border-radius-1);
	background-color: ${({ color, variant }) => getButtonColor(color, variant, 'bg')};
	border: 1px solid ${({ color, variant }) => getButtonColor(color, variant, 'border')};
	color: ${({ color, variant }) => getButtonColor(color, variant, 'color')};
	font-size: 16px;
	height: 38px;
	text-align: center;
	font-weight: 500;
	cursor: pointer;
	letter-spacing: 0.5px;
	transition: 300ms;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 32px;

	min-width: ${({ minWidth }) => minWidth}px;

	& > div.loader {
		margin-bottom: -2px;
	}

	&:hover {
		transform: translateY(-1px);
		background-color: ${({ color, variant }) => getButtonColorOnHover(color, variant, 'bg')};
		border-color: ${({ color, variant }) => getButtonColorOnHover(color, variant, 'border')};
		color: ${({ color, variant }) => getButtonColorOnHover(color, variant, 'color')};
		box-shadow: 0px 6px 15px #0000ff30;
	}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none !important;
			opacity: 0.7 !important;
			user-select: none;
		`}
`;
