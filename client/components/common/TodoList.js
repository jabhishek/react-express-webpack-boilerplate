import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
	render() {
		let todoList;
		if (this.props.todos && this.props.todos.length > 0) {
			const todos = this.props.todos.map((todo) => {
				return (
					<TodoItem key={todo.id} todo={todo}/>
				);
			});
			todoList = (<ul>{todos}</ul>);
		}

		return (
			<div className="todo-list">
				{ todoList }
			</div>
		);
	}
}

TodoList.propTypes = {
	todos: React.PropTypes.array
};
