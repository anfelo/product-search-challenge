import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import * as serviceWorker from './serviceWorker';

// Components
import App from './app/App';

// Global styles
import './assets/styles/global.scss';

ReactDOM.render(
	<React.StrictMode>
		<App>{routes}</App>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
