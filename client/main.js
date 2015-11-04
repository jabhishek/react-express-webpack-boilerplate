import React from 'react';
import ReactDOM from 'react-dom';
import {Router } from 'react-router';
import routes from './routes';
import Main from './Main.less'; // eslint-disable-line no-unused-vars
import createBrowserHistory from 'history/lib/createBrowserHistory';

ReactDOM.render(
    (
        <Router history={createBrowserHistory()}>
            {routes}
        </Router>
    ),
    document.getElementById('root')
);
