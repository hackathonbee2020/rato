import React, { useState, useContext } from 'react';

import { Container, MessagesArea, Message, Form } from './styles';
import { BiSend } from 'react-icons/bi';

import { POST } from '../../services/api';
import { AuthContext } from '../../store/Auth';

const ClientChat = ({ conversationId }) => {
	const { user: loggedUser } = useContext(AuthContext);

	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

	const handleInputChange = (e) => setMessage(e.target.value);
	const handeSendMessage = async (e) => {
		try {
			e.preventDefault();

			if (message) {
				setMessages([...messages, message]);
				setMessage('');
			}

			const payload = {
				conversationId: conversationId,
				messages: [{ text: message, sender: loggedUser.id, type: 'UserMessage' }],
			};
			console.log(payload)
			const response = await POST('api/v1/messages', payload);

			console.log(response);
		} catch (error) {}
	};

	return (
		<Container>
			<MessagesArea>
				{messages.map((message, index) => (
					<Message key={index}>{message}</Message>
				))}
			</MessagesArea>

			<Form onSubmit={handeSendMessage}>
				<input placeholder='Enviar mensagem' value={message} onChange={handleInputChange} />

				<button type='submit' disabled={!message}>
					<BiSend />
				</button>
			</Form>
		</Container>
	);
};

export default ClientChat;
