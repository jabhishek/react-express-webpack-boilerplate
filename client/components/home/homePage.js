// see https://github.com/rackt/react-router/pull/1811/files for createDecorator
import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import Page from '../common/Page';
import TodoStore from '../../stores/todoStore';
import TodoSection from './TodoSection';

@connectToStores
export default class HomePage extends React.Component {
	static getStores() {
		return [TodoStore];
	}

	static getPropsFromStores() {
		return TodoStore.getState();
	}

	render() {
		return (
			<Page className="home-page" headerText="Home">
				<TodoSection className="todo-section" todos={this.props.todos}/>
			</Page>
		);
	}
}

HomePage.propTypes = {
	todos: React.PropTypes.array
};

