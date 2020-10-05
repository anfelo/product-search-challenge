import React from 'react';
import { Route } from 'react-router-dom';

import lazyComponent from '../../shared/components/lazy-component/LazyComponent';

const Home = lazyComponent(() =>
	import('./pages/Home').then((module) => module.default)
);

export default <Route exact path='/' component={Home} />;
