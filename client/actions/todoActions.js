import alt from '../alt';

class TodoActions {
    addTodo(text) {
        this.dispatch({ text });
    }
    clearAllTodos() {
        this.dispatch();
    }
}
var actions = alt.createActions(TodoActions);
export default actions;