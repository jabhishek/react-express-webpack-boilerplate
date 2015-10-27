import TodoActions from '../../client/actions/todoActions';
import alt from '../../client/alt';
import _ from 'lodash';

const clearAction = 'TodoActions.clearAllTodos',
	addTodoAction = 'TodoActions.addTodo',
	removeTodoAction = 'TodoActions.removeTodo';


describe("TodoActions", () => {
	beforeEach(function() {
		spyOn(alt, 'dispatch');
	});

	afterEach(function() {
		alt.dispatch.calls.reset();
	});

	it("addTodo should dispatch an event", () => {
		const todo = "Hey!!";
		TodoActions.addTodo(todo);

		expect(alt.dispatch).toHaveBeenCalled();

		const args = alt.dispatch.calls.mostRecent().args;
		expect(args.indexOf(addTodoAction)).toBeGreaterThan(-1);
		expect(_.findIndex(args, {text: todo})).toBeGreaterThan(-1);
	});
	it("clearAllTodos should dispatch an event", () => {
		TodoActions.clearAllTodos();

		expect(alt.dispatch).toHaveBeenCalled();

		const args = alt.dispatch.calls.mostRecent().args;
		expect(args.indexOf(clearAction)).toBeGreaterThan(-1);
	});
	it("removeTodo should dispatch an event", () => {
		TodoActions.removeTodo(10);

		expect(alt.dispatch).toHaveBeenCalled();

		const args = alt.dispatch.calls.mostRecent().args;
		expect(args.indexOf(removeTodoAction)).toBeGreaterThan(-1);
		expect(args.indexOf(10)).toBeGreaterThan(-1);
	})
});