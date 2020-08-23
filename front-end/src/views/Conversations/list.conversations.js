import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Recdal from 'recdal';

import Button from '../../components/Button';
import {
	Container,
	PendingConversations as PendingConversationsList,
	ModalContent,
	ConversationPreview,
} from './styles';

import { POST, GET, PUT } from '../../services/api';
import { AuthContext } from '../../store/Auth';

const PendingConversations = () => {
	const history = useHistory();

	const modalRef = useRef(null);
	const { user: loggedUser } = useContext(AuthContext);

	const [fetchingMessages, setFetchingMessages] = useState(false);
	const [messages, setMessages] = useState([]);
	const [conversations, setConversations] = useState([]);

	const fetchConversation = useCallback(async () => {
		try {
			const payload = { limit: 10 };
			const response = await POST(`/api/v1/conversations`, payload);

			let conversations = response.data.data.filter((conversation) => {
				const isConversationPending = Object.keys(conversation.participants).length === 1;

				return isConversationPending && conversation.lastMessage;
			});

			const amountOfConversations = conversations.length;

			for (let index = 0; index < amountOfConversations; index++) {
				const conversation = conversations[index];
				let user = null;

				if (conversation?.lastMessage?.senderId) {
					user = await GET(`/api/v1/users/${conversation.lastMessage.senderId}`);
					delete conversations[index].lastMessage.senderId;
					conversations[index].sender = user.data;
				}
			}

			setConversations(conversations);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handleJoinConversation = async () => {
		try {
			const payload = {
				conversationId: modalRef.current.getData('conversationId'),
				userId: loggedUser.id,
				access: 'ReadWrite',
			};

			await PUT('/api/v1/participations', payload);

			return history.push(`/conversations`);
		} catch (error) {
			console.error(error);
		}
	};

	const handleViewConversationMessages = async (conversationId) => {
		try {
			modalRef.current.open({ conversationId });
			setFetchingMessages(true);

			const messages = await GET(`/api/v1/messages/${conversationId}`);

			setMessages(messages.data.data);
			setFetchingMessages(false);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchConversation();
	}, [fetchConversation]);

	return (
		<>
			<Container>
				<h1 onClick={() => console.log(conversations)}>Conversas Pendentes</h1>

				<PendingConversationsList>
					{conversations.map((conversation) => (
						<li
							key={conversation.id}
							onClick={() => handleViewConversationMessages(conversation.id)}>
							<strong>{conversation.sender.name}</strong>
							<p>{conversation.lastMessage.text}</p>
						</li>
					))}
				</PendingConversationsList>
			</Container>

			<Recdal ref={modalRef}>
				<ModalContent>
					{fetchingMessages ? (
						<h1>Loading...</h1>
					) : (
						<ConversationPreview>
							<div>
								{messages.map((message) => (
									<p key={message.id}>{message.text}</p>
								))}
							</div>
							<Button onClick={handleJoinConversation}>Iniciar Atendimento</Button>
						</ConversationPreview>
					)}
				</ModalContent>
			</Recdal>
		</>
	);
};

export default PendingConversations;
