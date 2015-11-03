import React from 'react';
import './TodoItem.less';

export default class TodoItem extends React.Component {
	render() {
		return (
			<li className="todo-item">
				{ this.props.todo.text }
			</li>
		);
	}
}

TodoItem.propTypes = {
	todo: React.PropTypes.object
};
