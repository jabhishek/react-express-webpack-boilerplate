import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute } from 'react-router';
import routes from './routes';
import Main from './main.less';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Home from './components/home/homePage';
import About from './components/about/aboutPage';
import App from './app';

ReactDOM.render(
    (
        <Router history={createBrowserHistory()}>
            {routes}
        </Router>
    ),
    document.getElementById('root')
);
