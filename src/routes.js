import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// App Components
import Home from './app/modules/home/pages/Home';
import ProductSearch from './app/modules/product-search/pages/ProductSearch';

export default (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/search' component={ProductSearch} />
		</Switch>
	</BrowserRouter>
);
