// see https://github.com/rackt/react-router/pull/1811/files for createDecorator
import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import Page from '../common/Page';
import TodoStore from '../../stores/todoStore';
import TodoActions from '../../actions/todoActions';
import TodoSection from './TodoSection';

@connectToStores
export default class HomePage extends React.Component {
	static getStores() {
		return [TodoStore];
	}

	static getPropsFromStores() {
		return TodoStore.getState();
	}

	onTodoSave(text) {
		TodoActions.addTodo(text);
	}

	render() {
		const header = `Todos (${this.props.todos.length} Incomplete)`;
		return (
			<Page className="home-page" headerText={header}>
				<TodoSection
					todos={this.props.todos.slice() }
					onTodoSave={this.onTodoSave.bind(this)}/>
			</Page>
		);
	}
}

HomePage.propTypes = {
	todos: React.PropTypes.array
};

