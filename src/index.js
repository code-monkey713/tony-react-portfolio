import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <App />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
