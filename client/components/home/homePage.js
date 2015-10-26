// see https://github.com/rackt/react-router/pull/1811/files for createDecorator
import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import Page from '../common/Page';
import TodoStore from '../../stores/todoStore';

@connectToStores
export default class HomePage extends React.Component {
	static getStores() {
		return [TodoStore];
	}

	static getPropsFromStores() {
		return TodoStore.getState();
	}

	render() {
		let todos;
		if (this.props.todos) {
			let index = 0;
			todos = this.props.todos.map((todo) => {
				return (
					<li key={index++}>{todo.text}</li>
				);
			});
		}
		return (
			<Page className="home-page" headerText="Home">
				<ul>
					{todos}
				</ul>
			</Page>
		);
	}
}

HomePage.propTypes = {
	todos: React.PropTypes.string
};

