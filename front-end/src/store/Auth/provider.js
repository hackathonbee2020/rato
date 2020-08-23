import React, { useState } from 'react';

import AuthContext from './context';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem('@USER') || sessionStorage.getItem('@USER');

		if (storedUser) {
			const user = JSON.parse(storedUser);

			return user;
		}

		return null;
	});

	const signIn = (payload, persistLogged) => {
		const storage = persistLogged ? localStorage : sessionStorage;

		storage.setItem('@AUTH', payload.token);
		storage.setItem('@USER', JSON.stringify(payload.user));

		setUser(payload.user);

		return (window.location.href = payload.user.isAgent ? '/conversations' : '/support');
	};

	const signOut = () => {
		setUser(null);

		localStorage.clear();
		sessionStorage.clear();

		window.location.href = '/';
	};

	return (
		<AuthContext.Provider value={{ isLogged: !!user, user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
