import React from 'react';
import Router from 'react-router';
import Home from './components/home/homePage';
import About from './components/about/aboutPage';
import App from './app';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
		<Route handler={App}>
			<DefaultRoute handler={Home}/>
			<Route name="home" path="home" handler={Home}/>
			<Route name="about" path="about" handler={About}/>
		</Route>
);

export default routes;