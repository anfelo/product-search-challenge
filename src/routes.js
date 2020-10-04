import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// App Components
import Home from './app/modules/home/pages/Home';

export default (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
		</Switch>
	</BrowserRouter>
);
