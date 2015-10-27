import alt from '../alt';

class TodoActions {
    addTodo(text) {
        this.dispatch({text});
    }

    clearAllTodos() {
        this.dispatch();
    }

    removeTodo(id) {
        this.dispatch(id);
    }
}
const actions = alt.createActions(TodoActions);
export default actions;
