import React, { useState, useRef, useContext } from 'react';
import * as Yup from 'yup';

import Button from '../../components/Button';
import { Form, Input } from '../../components/Form';
import { Container, FormWrapper } from './styles';

import { AuthContext } from '../../store/Auth';
import { POST } from '../../services/api';
import { users } from '../../data';

const Login = () => {
	const formRef = useRef(null);
	const { signIn } = useContext(AuthContext);

	const [authenticating, setAuthenticating] = useState(false);

	const handleSubmit = async (formData) => {
		try {
			const validationSchema = Yup.object().shape({
				password: Yup.string().required('Informe sua senha'),
				email: Yup.string().email('Informe um email válido').required('Informe o email'),
			});

			await validationSchema.validate(formData, { abortEarly: false });

			setAuthenticating(true);
			formRef.current.setErrors({});

			// if (formData.email.includes('agent')) {
			// 	return signIn({ user: users[4], token: 'sxasx' });
			// } else {
			// 	return signIn({ user: users[1], token: 'sxasx' });
			// }

			const { data } = await POST('/api/v1/users/auth', { ...formData });
			const isCorrectLogin = !!data.email;

			console.log({data})

			if (isCorrectLogin) {
				setTimeout(() => {
					signIn({ user: data, token: 'aiscjhaisuchaisgcuq8e71y28e1gbd' });
				}, 800);
			}
		} catch (error) {
			const errors = {};

			if (error instanceof Yup.ValidationError) {
				error.inner.forEach(({ path, message }) => (errors[path] = message));
				return formRef.current.setErrors(errors);
			}

			if (error.response.status === 401) {
				errors = {
					email: 'Credenciais incorretas',
					password: 'Credenciais incorretas',
				};

				return formRef.current.setErrors(errors);
			}

			console.error(`Unexpected error occurred: ${error.toString()}`);
		}
	};

	return (
		<Container>
			<FormWrapper>
				<h1>Entrar</h1>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input name='email' label='Email' />
					<Input name='password' label='Senha' type='password' />

					<Button loading={authenticating}>Entrar</Button>
				</Form>
			</FormWrapper>
		</Container>
	);
};

export default Login;
