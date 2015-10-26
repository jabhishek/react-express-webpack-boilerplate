import alt from '../alt';

class TodoActions {
    addTodo(text) {
        this.dispatch({text});
    }

    clearAllTodos() {
        this.dispatch();
    }
}
const actions = alt.createActions(TodoActions);
export default actions;
