import React from 'react';

import AppHeader from '../../../shared/components/app-header/AppHeader';
import SearchInput from '../../../shared/components/search-input/SearchInput';

const PublicLayout = (props) => {
	return (
		<>
			<AppHeader>
				<SearchInput></SearchInput>
			</AppHeader>
			<main>{props.children}</main>
		</>
	);
};

export default PublicLayout;
