// see https://github.com/rackt/react-router/pull/1811/files for createDecorator

import React from 'react';
export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { param: 'Hello'};
	}

	render() {
		return (
			<div className="home-page">
				<h1>{this.state.param + ' World!!!'}</h1>
			</div>
		);
	}
}


