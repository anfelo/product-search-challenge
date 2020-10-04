import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import homeRoutes from './app/modules/home/home.routes';
import productRoutes from './app/modules/products/product.routes';

export default (
	<BrowserRouter>
		<Switch>
			{homeRoutes}
			{productRoutes}
		</Switch>
	</BrowserRouter>
);
