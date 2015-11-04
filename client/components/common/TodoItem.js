import React from 'react';
import styles from './TodoItem.less';

export default class TodoItem extends React.Component {
	render() {
		return (
			<li className={styles.todoItem}>
				{ this.props.todo.text }
			</li>
		);
	}
}

TodoItem.propTypes = {
	todo: React.PropTypes.object
};
