import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Channels from '../views/Admin/Channels';
import Departments from '../views/Admin/Departments';
import Layout from '../components/Layout';

const protectedRoutes = [];

const MasterRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={protectedRoutes}>
					<Redirect to='/' />
				</Route>

				<Route exact path='/admin/channels'>
					<Layout>
						<Channels />
					</Layout>
				</Route>
				<Route exact path='/admin/departments'>
					<Layout>
						<Departments />
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
