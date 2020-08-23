import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../views/Login';
import Register from '../views/Register';

const protectedRoutes = ['/conversations'];

const AuthRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exatc path={protectedRoutes}>
					<Redirect to='/' />
				</Route>
				<Route exact path='/'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
				<Route exact path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default AuthRoutes;
