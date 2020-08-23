import React, { useState, useEffect, useRef, useContext } from 'react';
import Talk from 'talkjs';

import { Container, Chat } from './styles';

import { AuthContext } from '../../store/Auth';

const Conversations = () => {
	const chatRef = useRef(null);
	const { user } = useContext(AuthContext);

	const [inbox, setInbox] = useState(null);
	const [session, setSession] = useState(null);

	useEffect(() => {
		const initChat = async () => {
			try {
				await Talk.ready;
				const me = new Talk.User(user);

				if (!window.talkSession) {
					window.talkSession = new Talk.Session({
						appId: process.env.REACT_APP_APP_ID,
						me: me,
					});
				}

				setSession(window.talkSession);

				return setInbox(window.talkSession.createInbox());
			} catch (error) {
				console.error(error);
			}
		};

		initChat();
	}, []);

	useEffect(() => {
		if (inbox) {
			inbox.mount(chatRef.current);
		}
	}, [inbox]);

	return (
		<Container>
			<h1>Atendimentos</h1>
			<Chat ref={chatRef} />
		</Container>
	);
};

export default Conversations;
