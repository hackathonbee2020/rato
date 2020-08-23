import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/global';

import { AuthProvider } from './store/Auth';

function App() {
	return (
		<AuthProvider>
			<GlobalStyles />
			<Routes />
		</AuthProvider>
	);
}

export default App;
