import React, { useState, useContext } from 'react';
import { v4 } from 'uuid';

import Button from '../../components/Button';
import ClientChat from '../../components/ClientChat';
import { Container } from './styles';

import { AuthContext } from '../../store/Auth';

import { PUT } from '../../services/api';

const Conversations = () => {
	const { user: loggedUser } = useContext(AuthContext);

	const [fallback, setFallback] = useState(false);
	const [conversationId, setConversationId] = useState(false);

	const handleInitConversation = async () => {
		try {
			const conversationId = v4();
			setFallback(true);

			const payload = {
				conversationId: conversationId,
				participants: [loggedUser.id],
				photoUrl: null,
				custom: {
					pending: 'true',
				},
			};

			const response = await PUT('/api/v1/conversations ', payload);

			setConversationId(conversationId);
			setFallback(false);

			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Container>
			<h1>Suporte</h1>

			{!conversationId && (
				<Button loading={fallback} onClick={handleInitConversation}>
					Iniciar Chat
				</Button>
			)}

			{conversationId && <ClientChat conversationId={conversationId} />}
		</Container>
	);
};

export default Conversations;
