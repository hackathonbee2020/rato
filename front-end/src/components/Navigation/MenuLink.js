import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { MenuLink as Container } from './styles';

const MenuLink = ({ icon: Icon, to, ...rest }) => {
	const { pathname } = useLocation();

	return (
		<Container active={pathname.includes(to)} {...rest}>
			<Link to={to}>
				<Icon />
			</Link>
		</Container>
	);
};

export default MenuLink;
