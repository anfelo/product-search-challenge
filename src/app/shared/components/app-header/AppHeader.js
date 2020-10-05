import React from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.scss';
import logo from '../../../../assets/img/ml_logo.png';

const AppHeader = (props) => {
	return (
		<header className='app-header'>
			<nav className='navbar' role='navigation' aria-label='main navigation'>
				<div className='navbar-brand'>
					<Link to='/' className='navbar-item'>
						<img src={logo} alt='Logo de Mercado Libre' />
					</Link>
				</div>
				<div className='navbar-content'>{props.children}</div>
			</nav>
		</header>
	);
};

export default AppHeader;
