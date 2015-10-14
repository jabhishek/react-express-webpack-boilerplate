import React from 'react';
import Router from 'react-router';
import Home from './components/home/homePage';
import App from './app';

console.log(Home);

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
		<Route handler={App}>
			<DefaultRoute handler={Home}/>
			<Route name="home" path="home" handler={Home}/>
		</Route>
);

export default routes;