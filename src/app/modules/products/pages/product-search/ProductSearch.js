import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import * as productsService from '../../services/products.service';
import { loadImage } from '../../../../shared/helpers/utils/utils';

import PublicLayout from '../../../../core/layouts/public-layout/PublicLayout';
import SearchResultsList from '../../components/search-results-list/SearchResultsList';
import AppBreadcrumbs from '../../../../shared/components/app-breadcrumbs/AppBreadcrumbs';
import AppLoader from '../../../../shared/components/app-loader/AppLoader';

const ProductSearch = () => {
	const history = useHistory();
	const queryParams = useLocation().search;
	const searchText = new URLSearchParams(queryParams).get('search');
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	if (!searchText) {
		history.push('/');
	}

	useEffect(() => {
		(async () => {
			if (searchText) {
				setLoading(true);
				const results = await productsService.searchProducts(searchText);
				await Promise.all(
					results.data.items.map((item) => loadImage(item.picture))
				);
				setProducts(results.data.items);
				setLoading(false);
			}
		})();
	}, [searchText]);

	return (
		<PublicLayout>
			<AppBreadcrumbs></AppBreadcrumbs>
			{loading ? (
				<div className='row is-centered'>
					<AppLoader></AppLoader>
				</div>
			) : (
				<SearchResultsList products={products}></SearchResultsList>
			)}
		</PublicLayout>
	);
};

export default ProductSearch;
