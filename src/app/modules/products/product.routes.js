import React from 'react';
import { Route } from 'react-router-dom';

import lazyComponent from '../../shared/components/lazy-component/LazyComponent';

const ProductSearch = lazyComponent(() =>
	import('./pages/product-search/ProductSearch').then(
		(module) => module.default
	)
);

const ProductDetailPage = lazyComponent(() =>
	import('./pages/product-detail/ProductDetailPage').then(
		(module) => module.default
	)
);

export default (
	<>
		<Route exact path='/items' component={ProductSearch} />
		<Route path='/items/:id' component={ProductDetailPage} />
	</>
);
