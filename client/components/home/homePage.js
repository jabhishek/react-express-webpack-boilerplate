// see https://github.com/rackt/react-router/pull/1811/files for createDecorator

import React from 'react';
import Page from '../common/Page'
export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { param: 'Hello'};
	}

	render() {
		return (
			<Page className="home-page" headerText={this.state.param + ' World!!!'}>
			</Page>
		);
	}
}


