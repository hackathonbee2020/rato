import React from 'react';

import MenuLink from './MenuLink';
import { Menu as Container } from './styles';

import { BiConversation } from 'react-icons/bi';
import { BsPersonLinesFill } from 'react-icons/bs';

const Menu = () => {
	return (
		<Container>
			<MenuLink icon={BiConversation} to='/conversations' />
			<MenuLink icon={BsPersonLinesFill} to='/conversations/pending' />
		</Container>
	);
};

export default Menu;
