import React, { useContext } from 'react';

import AuthRoutes from './auth.routes';
import AgentRoutes from './agent.routes';
import ClientRoutes from './client.routes';
import MasterRoutes from './master.routes';
import AdminRoutes from './admin.routes';

import { AuthContext } from '../store/Auth';

const Routes = () => {
	const { user } = useContext(AuthContext);

	// return <MasterRoutes />;
	// return <AdminRoutes />;

	if (!user) {
		return <AuthRoutes />;
	}

	return user.isAgent ? <AgentRoutes /> : <ClientRoutes />;
};

export default Routes;
