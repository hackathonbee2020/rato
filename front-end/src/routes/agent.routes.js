import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import { AgentConversations, PendingConversations } from '../views/Conversations';

const AgentRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/conversations'>
					<Layout>
						<AgentConversations />
					</Layout>
				</Route>
				<Route exact path='/conversations/pending'>
					<Layout>
						<PendingConversations />
					</Layout>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default AgentRoutes;
