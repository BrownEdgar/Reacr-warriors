import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/Garnik/Components/Homeworks/4-context/Context';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
     <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


