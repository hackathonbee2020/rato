import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Users from '../views/Master/Users';
import Layout from '../components/Layout';

const protectedRoutes = [];

const MasterRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={protectedRoutes}>
					<Redirect to='/' />
				</Route>

				<Route exact path='/master'>
					<Layout>
						<Users />
					</Layout>
				</Route>

				<Route path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default MasterRoutes;
