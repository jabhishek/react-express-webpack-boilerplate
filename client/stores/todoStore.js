import alt from '../alt';
import TodoActions from '../actions/todoActions';
import _ from 'lodash';

const sortNumbers = (a, b) => {
    return b - a;
};
class TodoStore {
    constructor() {
        this.bindListeners({
            addTodo: TodoActions.addTodo,
            clearAllTodos: TodoActions.clearAllTodos,
            removeTodo: TodoActions.removeTodo
        });

        this.todos = [];
    }

    addTodo(todo) {
        const ids = _.pluck(this.todos, 'id').sort(sortNumbers);
        const maxId = ids.length ? ids[0] : 0;
        this.todos.push({id: maxId + 1, text: todo.text});
    }

    clearAllTodos() {
        this.todos.length = 0;
    }

    removeTodo(id = null) {
        if (id === null) {
            return;
        }
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            this.todos.splice(todoIndex, 1);
        }
    }
}
export default alt.createStore(TodoStore, 'TodoStore');

