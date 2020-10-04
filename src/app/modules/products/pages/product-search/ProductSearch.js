import React from 'react';

import PublicLayout from '../../../../core/layouts/public-layout/PublicLayout';
import SearchResultsList from '../../components/search-results-list/SearchResultsList';
import AppBreadcrumbs from '../../../../shared/components/app-breadcrumbs/AppBreadcrumbs';

const ProductSearch = () => {
	return (
		<PublicLayout>
			<AppBreadcrumbs></AppBreadcrumbs>
			<SearchResultsList></SearchResultsList>
		</PublicLayout>
	);
};

export default ProductSearch;
