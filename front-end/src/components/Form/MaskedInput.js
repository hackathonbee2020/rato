import './collapse.css';

import React, { useRef, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { Collapse } from 'react-collapse';
import { useField } from '@unform/core';

import { InputContainer, Error, collapseTheme } from './styles';

const MaskedInput = ({ name, mask, maskChar = '_', size, label, ...rest }) => {
	const maskedInputRef = useRef(null);
	const { fieldName, registerField, defaultValue = '', error = false } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: maskedInputRef.current,
			path: 'value',
			setValue(ref, value) {
				ref.setInputValue('');
			},
			clearValue(ref) {
				ref.setInputValue('');
			},
		});
	}, [fieldName, registerField]);

	return (
		<InputContainer {...rest} size={size} error={error} className='__input'>
			{label && <label htmlFor={fieldName}>{label}</label>}
			<InputMask
				{...rest}
				ref={maskedInputRef}
				defaultValue={defaultValue}
				className='masked-input'
				mask={mask}
				maskChar={maskChar}
				autoComplete='off'
			/>
			<Collapse isOpened={!!error} theme={collapseTheme}>
				<Error>{error}</Error>
			</Collapse>
		</InputContainer>
	);
};

export default MaskedInput;
