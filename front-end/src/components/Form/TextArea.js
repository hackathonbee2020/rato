import './collapse.css';

import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Collapse } from 'react-collapse';

import { InputContainer, Error, collapseTheme } from './styles';

export default function TextArea({ name, label, size, type = 'text', rows, ...rest }) {
	const textAreaRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textAreaRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<InputContainer
			isTextArea
			{...rest}
			size={size}
			error={error}
			className={`__input ${rest.className}`}>
			{label && <label htmlFor={name}>{label}</label>}
			<textarea
				ref={textAreaRef}
				rows={rows}
				defaultValue={defaultValue}
				{...rest}></textarea>
			<Collapse isOpened={!!error} theme={collapseTheme}>
				<Error>{error}</Error>
			</Collapse>
		</InputContainer>
	);
}
