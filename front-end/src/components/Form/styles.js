import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';

export const InputContainer = styled.div`
	grid-column: span ${({ size }) => size || 1};
	display: flex;
	flex-direction: column;
	position: relative;

	& svg.pass-icon {
		position: absolute;
		top: 38px;
		right: 16px;
		transform: translateY(-50%);
		font-size: 20px;
		color: var(--heading-1);
		opacity: 0.5;
		cursor: pointer;
		transition: 300ms;

		&:hover {
			opacity: 0.8;
		}
	}

	& .react-select__control {
		height: 38px;
		border-color: ${({ error }) => (error ? 'var(--danger)' : 'var(--input-border)')};

		& * {
			color: ${({ error }) => (error ? 'var(--danger)' : 'var(--body-1)')} !important;
		}

		&:hover {
			border-color: ${({ error }) => (error ? 'var(--danger)' : 'var(--input-border-hover)')};
		}
	}

	& .css-1pahdxg-control {
		box-shadow: 0 0 0 ${({ error }) => (error ? '#ff363610' : 'var(--input-focus)')} !important;
	}

	& > input,
	textarea {
		border-radius: var(--border-radius-1);
		width: 100%;
		border: 1px solid var(--input-border);
		padding: 4px 8px;
		font-size: 15px;
		height: ${({ isTextArea }) => (isTextArea ? 'max-content' : '38px')};
		transition: border-color 150ms;
		color: var(--body-1);
		transition: background-color 300ms;

		&:hover {
			border-color: ${({ error }) => (error ? 'var(--danger)' : 'var(--input-border-hover)')};
		}

		&:focus {
			background: ${({ error }) => (error ? '#ff363610' : 'var(--input-focus)')};
		}
	}

	& > textarea {
		max-width: max-content;
		min-width: 100%;
		min-height: 38px;
		font-family: 'Roboto', sans-serif;
		padding: 8px;

		&::placeholder {
			font-size: 15px;
			color: var(--body-2);
			opacity: 0.9;
		}
	}

	& > label {
		font-size: 14px;
		margin-bottom: 2px;
		color: var(--heading-1);
		font-weight: 700;
		transition: color 150ms;
	}

	${({ error }) =>
		error &&
		css`
			& > input,
			textarea {
				border-color: var(--danger);

				&::placeholder {
					color: var(--danger);
				}
			}

			& > label {
				color: var(--danger);
			}
		`}
`;

export const CheckboxContainer = styled.div`
	& > div {
		display: flex;
		align-items: center;

		& > input {
			width: 0;
			height: 0;
			visibility: hidden;
		}

		& > span.check {
			position: relative;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;

			& > svg {
				color: var(--primary);
				font-size: 20px;
				z-index: 5;
			}

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 35px;
				height: 35px;
				transition: opacity 120ms;
				opacity: 0;
				border-radius: 100%;
				background: #d8b1352e;
				z-index: 1;
			}

			&:hover {
				&::after {
					opacity: 1;
				}
			}
		}

		& > label {
			font-size: 15px;
			margin-left: 8px;
			color: var(--heading-1);
			font-weight: 500;
		}
	}
`;

export const Switch = styled.div`
	width: 44px;
	height: 26px;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ checked }) => (checked ? 'var(--primary)' : 'var(--input-border)')};
	border-radius: var(--border-radius-3);
	position: relative;
	cursor: pointer;
	background: ${({ checked }) => (checked ? 'var(--primary)' : 'var(--input-border)')};

	${({ checked }) =>
		checked &&
		css`
			box-shadow: inset 0 0 1px 1px rgba(40, 40, 40, .1);
		`}

	& > span {
		width: 20px;
		height: 20px;
		position: absolute;
		top: 2px;
		left: ${({ checked }) => (checked ? 'calc(100% - 22px)' : '2px')};
		background: var(--white);
		border-radius: 100%;
		transition: left 300ms;
		box-shadow: ${({ checked }) =>
			checked ? '0px 1px 1px 1px rgba(10, 10, 10, .2)' : '1px 1px 1px 1px rgba(5, 5, 5, .1)'};
	}
`;

export const FileInputContainer = styled.div`
	grid-column: span ${({ size }) => size || 1};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	border: 1px dashed var(--input-border-hover);
	cursor: pointer;
	height: 60px;
	border-radius: var(--border-radius-1);
	transition: 300ms;

	&:hover {
		background: ${({ error }) => (error ? '#ff363610' : 'var(--input-focus)')};
	}

	& > svg {
		font-size: 20px;
		color: var(--heading-1);
		opacity: 0.5;
		pointer-events: none;
		transition: 300ms;
	}

	& > label {
		font-size: 14px;
		margin-bottom: 2px;
		color: var(--heading-1);
		opacity: 0.5;
		font-weight: 700;
		transition: color 150ms;
		pointer-events: none;
	}

	& > input {
		width: 0;
		height: 0;
		top: 0;
		left: 0;
		opacity: 0;
		position: absolute;

		&:hover {
			border-color: ${({ error }) => (error ? 'var(--danger)' : 'var(--input-border-hover)')};
		}

		&:focus {
			background: ${({ error }) => (error ? '#ff363610' : 'var(--input-focus)')};
		}
	}

	${({ error }) =>
		error &&
		css`
			border-color: var(--danger);

			& > label {
				color: var(--danger);
			}

			& > svg {
				color: var(--danger);
			}
		`}

	${({ showPreview }) =>
		showPreview &&
		css`
			height: max-content;
			max-width: max-content;
			border-radius: 100%;
			border: none;
			background: none;
		`}
`;

export const FileInputOverlay = styled.div`
	pointer-events: none;
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 100%;
	transform: translate(-50%, -50%);
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	background: rgba(0, 0, 0, 0.6);
	opacity: ${({ show }) => (show ? 1 : 0)};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > span {
		font-size: 12px;
		font-weight: 500;
		color: var(--white);
	}

	& > svg {
		margin-bottom: 2px;
		color: var(--white);
		font-size: 24px;
	}
`;

export const StyledForm = styled(Unform)`
	width: 100%;
	display: grid;
	gap: 16px;
	grid-template-rows: auto;
	grid-template-columns: ${({ columns }) => columns || 'repeat(4, 1fr)'};
	position: relative;
`;

export const Error = styled.span`
	font-size: 11px;
	color: var(--danger);
	font-weight: 700;
`;

export const collapseTheme = {
	collapse: 'ReactCollapse--collapse',
	content: 'ReactCollapse--content',
};
