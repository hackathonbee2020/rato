import React, { useState, useRef } from 'react';
import * as Yup from 'yup';

import Button from '../../components/Button';
import { Form, Input, MaskedInput } from '../../components/Form';
import { Container, FormWrapper } from './styles';

import { PUT } from '../../services/api';

const Register = () => {
	const formRef = useRef(null);
	const [creatingUser, setCreatingUser] = useState(false);

	const handleSubmit = async (formData) => {
		try {
			const validationSchema = Yup.object().shape({
				name: Yup.string().required('Informe seu nome'),
				password: Yup.string().required('Informe sua senha'),
				email: Yup.string().email('Informe um email válido').required('Informe o email'),
				phone: Yup.string().required('Informe seu telefone'),
			});

			await validationSchema.validate(formData, { abortEarly: false });

			setCreatingUser(true);
			formRef.current.setErrors({});

			const payload = {
				name: formData.name,
				password: formData.password,
				email: formData.email,
				phone: `+55${formData.phone.replace(/[() -]/g, '')}`,
			};

			const response = await PUT('/api/v1/users', { ...payload });

			console.log(response);

			setCreatingUser(false);
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				const errors = {};

				error.inner.forEach(({ path, message }) => (errors[path] = message));
				return formRef.current.setErrors(errors);
			}

			console.error(`Unexpected error occurred: ${error.toString()}`);
		}
	};

	return (
		<Container>
			<FormWrapper>
				<h1>Criar Conta</h1>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input name='name' label='Nome Completo' />
					<MaskedInput name='phone' label='Telefone' mask='(99) 9 9999-9999' />
					<Input name='email' label='Email' />
					<Input name='password' label='Senha' type='password' />

					<Button loading={creatingUser}>Criar Conta</Button>
				</Form>
			</FormWrapper>
		</Container>
	);
};

export default Register;
