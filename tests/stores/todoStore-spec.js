import alt from '../../client/alt';
import todoStore from '../../client/stores/todoStore';
import todoActions from '../../client/actions/todoActions';

describe('TodoStore', () => {
    describe("clearTodos", () => {
        it("clears all todos on clearTodos action", () => {
            const clearAction = 'TodoActions.clearAllTodos',
                addTodoAction = 'TodoActions.addTodo',
                data = {text: 'Hello'};

            alt.dispatcher.dispatch({action: clearAction, null});
            expect(todoStore.getState().todos.length).toEqual(0);

            alt.dispatcher.dispatch({action: addTodoAction, data});
            expect(todoStore.getState().todos.length).toEqual(1);

            alt.dispatcher.dispatch({action: clearAction, null});
            expect(todoStore.getState().todos.length).toEqual(0);
        });
    });

    describe("addTodo", () => {
        const clearAction = 'TodoActions.clearAllTodos',
            addTodoAction = 'TodoActions.addTodo';

        beforeEach(() => {
            // clear all items
            alt.dispatcher.dispatch({action: clearAction});
        });
        it('listens for addTodo action', () => {
            let oldTodosLength = todoStore.getState().todos.length,
                data = {text: 'Hello'};

            alt.dispatcher.dispatch({action: addTodoAction, data});

            expect(todoStore.getState().todos.length).toEqual(oldTodosLength + 1);
        });

        it('addTodo - generates id that is one more than the max id', () => {
            // add 10 items
            for (var i = 1; i <= 10; i++) {
                let text = `Hello - ${i}`;
                alt.dispatcher.dispatch({action: addTodoAction, data: {text: text}});
            }

            expect(todoStore.getState().todos.length).toEqual(10);
            expect(todoStore.getState().todos[0]).toEqual({text: 'Hello - 1', id: 1});
            expect(todoStore.getState().todos[9]).toEqual({text: 'Hello - 10', id: 10});
        });
    });
});