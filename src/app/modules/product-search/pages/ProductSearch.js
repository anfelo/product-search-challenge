import React from 'react';

import PublicLayout from '../../../core/layouts/public-layout/PublicLayout';
import SearchResultsList from '../components/search-results-list/SearchResultsList';

const ProductSearch = () => {
	return (
		<PublicLayout>
			<SearchResultsList></SearchResultsList>
		</PublicLayout>
	);
};

export default ProductSearch;
