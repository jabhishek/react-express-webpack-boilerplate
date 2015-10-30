import React from 'react';
import TodoList from '../common/TodoList';
import InputField from '../common/inputField';

export default class TodoSection extends React.Component {
	onTodoSave(text) {
		if (this.props.onTodoSave) {
			this.props.onTodoSave(text);
		}
	}

	render() {
        return (
            <div>
                <TodoList todos={this.props.todos}/>
                <InputField labelText="Enter a todo task"
                            name="todo"
                            onSave={this.onTodoSave.bind(this)}/>
            </div>
        );
    }
}

TodoSection.propTypes = {
    todos: React.PropTypes.array.isRequired,
	onTodoSave: React.PropTypes.func
};

