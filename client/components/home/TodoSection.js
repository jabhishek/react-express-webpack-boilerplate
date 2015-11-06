import React from 'react';
import TodoList from '../common/TodoList';
import InputField from '../common/inputField';
import styles from './todoSection.less';
import shouldUpdate from '../../utils/shouldUpdate';

@shouldUpdate('todos')
export default class TodoSection extends React.Component {
	onTodoSave(text) {
		if (this.props.onTodoSave) {
			this.props.onTodoSave(text);
		}
	}

	render() {
        return (
            <div className={styles.todoSection}>
                <InputField labelText="Enter a todo task"
                            name="todo"
                            onSave={this.onTodoSave.bind(this)}/>
                <TodoList todos={this.props.todos}/>
            </div>
        );
    }
}

TodoSection.propTypes = {
    todos: React.PropTypes.array.isRequired,
	onTodoSave: React.PropTypes.func
};

