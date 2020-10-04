import React from 'react';
import { Route } from 'react-router-dom';

import ProductSearch from './pages/product-search/ProductSearch';
import ProductDetailPage from './pages/product-detail/ProductDetailPage';

export default [
	<Route exact path='/items' component={ProductSearch} />,
	<Route path='/items/:id' component={ProductDetailPage} />
];
