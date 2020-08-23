import React, { useContext } from 'react';

import MenuLink from './MenuLink';
import Menu from './Menu';
import { Container, Logo } from './styles';

import { BsChatSquare } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';

import { AuthContext } from '../../store/Auth';

const Navigation = () => {
	const { signOut, user } = useContext(AuthContext);

	return (
		<Container>
			<Logo>
				<BsChatSquare />
			</Logo>

			{user.isAgent && <Menu />}

			<MenuLink icon={BiExit} to='/' onClick={signOut} />
		</Container>
	);
};

export default Navigation;
