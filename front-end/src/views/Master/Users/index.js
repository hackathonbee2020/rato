import React, { useState, useRef } from 'react';
import Recdal from 'recdal';

import Button from '../../../components/Button';
import { Form, Input } from '../../../components/Form';
import { Container, TableWrapper, ModalContent } from './styles';

const Users = () => {
	const formRef = useRef(null);
	const modalRef = useRef(null);

	const [creatingUser, setCreatingUser] = useState(false);

	const handleCreateUser = async ({ name }) => {
		try {
			if (!name) {
				throw { validationError: true };
			}

			modalRef.current.lock();
			setCreatingUser(true);

			setTimeout(() => {
				modalRef.current.unlock();
				modalRef.current.close();
				setCreatingUser(false);
			}, 1000);
		} catch (error) {
			console.error(error);

			if (error.validationError) {
				return formRef.current.setFieldError('name', 'Informe o nome do Cliente');
			}
		}
	};

	const handleOpenModal = () => modalRef.current.open();
	const handleCloseModal = () => {
		modalRef.current.close();
		formRef.current.reset();
	};

	return (
		<>
			<Container>
				<header>
					<h1>Usuários</h1>
					<Button onClick={handleOpenModal}>Novo Usuário</Button>
				</header>

				<TableWrapper></TableWrapper>
			</Container>

			<Recdal ref={modalRef} onSubmit={handleCreateUser}>
				<ModalContent>
					<h1>Novo Usuário</h1>

					<Form ref={formRef} onSubmit={handleCreateUser}>
						<Input size={4} name='name' label='Nome' />

						<div className='buttons'>
							<Button
								disabled={creatingUser}
								variant='outlined'
								type='button'
								onClick={handleCloseModal}>
								Cancelar
							</Button>
							<Button loading={creatingUser} type='submit'>
								Criar Usuário
							</Button>
						</div>
					</Form>
				</ModalContent>
			</Recdal>
		</>
	);
};

export default Users;
