import alt from '../alt';
import TodoActions from '../actions/todoActions';
import _ from 'lodash';

function sortNumbers(a, b) {
    return b - a;
}

class TodoStore {
    constructor() {
        this.bindListeners({
            addTodo: TodoActions.addTodo,
            clearAllTodos: TodoActions.clearAllTodos
        });

        this.todos = [];
    }

    addTodo(todo) {
        let todos = this.todos;
        let ids = _.pluck(todos, 'id').sort(sortNumbers);
        let maxId = ids.length ? ids[0] : 0;
        this.todos.push({id: maxId + 1, text: todo.text});
    }

    clearAllTodos() {
        this.todos = [];
    }
}
var store = alt.createStore(TodoStore, 'TodoStore');

export default store;