import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/Georgi/components/todo_list2/App'
import { BrowserRouter as Router } from 'react-router-dom'




ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);


