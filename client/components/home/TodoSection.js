import React from 'react';
import TodoList from '../common/TodoList';

export default class TodoSection extends React.Component {

	render() {
		return (
			<TodoList todos={this.props.todos}>
				Todos
			</TodoList>
		);
	}
}

TodoSection.propTypes = {
	todos: React.PropTypes.array.isRequired
};

