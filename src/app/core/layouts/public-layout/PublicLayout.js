import React from 'react';

import AppHeader from '../../../shared/components/app-header/AppHeader';
import SearchInput from '../../../shared/components/search-input/SearchInput';

import './PublicLayout.scss';

const PublicLayout = (props) => {
	return (
		<>
			<AppHeader>
				<SearchInput></SearchInput>
			</AppHeader>
			<main className='main-content'>{props.children}</main>
		</>
	);
};

export default PublicLayout;
