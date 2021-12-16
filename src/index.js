import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/Edgar/Router6/App';
import { BrowserRouter as Router } from 'react-router-dom'

// import App from './Components/Georgi/components/axios/App'


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);


