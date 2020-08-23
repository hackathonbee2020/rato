import React, { useLayoutEffect, useState, useRef } from 'react';
import Loader from 'react-loader-spinner';

import { getButtonColor } from '../../utils/helpers/styles';

import { Container } from './styles';

const Button = ({ children, color, variant, size, loading, disabled, lockW = true, ...rest }) => {
	const ref = useRef(null);

	const [minWidth, setMinWidth] = useState(0);

	useLayoutEffect(() => {
		if (!lockW || !ref.current) {
			return;
		}

		const button = ref.current;

		return setMinWidth(button.getBoundingClientRect().width);
	}, [ref.current]);

	const onClick = (e) => {
		if (loading || disabled) {
			return;
		}

		rest.onClick && rest.onClick(e);
	};

	return (
		<Container
			{...rest}
			ref={ref}
			minWidth={minWidth}
			disabled={disabled || loading}
			color={color || 'primary'}
			variant={variant || 'default'}
			size={size}
			onClick={onClick}>
			{loading ? (
				<Loader
					type='TailSpin'
					color={getButtonColor(color, variant, 'text')}
					height={21}
					width={21}
					timeout={0}
					className='loader'
				/>
			) : (
				children
			)}
		</Container>
	);
};

export default Button;
