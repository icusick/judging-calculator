import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import App from './components/app.js';
import Fee from './components/fee.js';

ReactDOM.render(
  <BrowserRouter>
			<div>
				<Switch>
					<Route path="/fee" component={Fee} />
					<Route path="/" component={App} />
				</Switch>
			</div>
		</BrowserRouter>,
document.getElementById('root'));
