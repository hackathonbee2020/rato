import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import { ClientConversations } from '../views/Conversations';

const protectedRoutes = ['/conversations'];

const ClientRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={protectedRoutes}>
					<Redirect to='/support' />
				</Route>

				<Route exact path='/support'>
					<Layout hideNavbar>
						<ClientConversations />
					</Layout>
				</Route>

				<Route path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default ClientRoutes;
