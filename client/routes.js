import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/home/homePage';
import About from './components/about/aboutPage';
import App from './app';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
    </Route>
);

export default routes;
