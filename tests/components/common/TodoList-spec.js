import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../../../client/components/common/TodoList';
import ReactAddons from 'react/addons';
var testUtils = ReactAddons.addons.TestUtils;

describe("TodoList", () => {
	const todos = [{id: 1, text: "Todo - 1"}, {id: 2, text: "Todo - 2"}];
	const emptyTodos = [];

	beforeEach(() => {
		TodoList.__Rewire__('TodoItem', React.createClass({
			render: function () {
				return (<li className="todo-item">
					Todo
				</li>);
			}
		}));
	});

	afterEach(() => {
		TodoList.__ResetDependency__('TodoItem');
	});

	it("should display a list of todos", () => {
		let todoList = testUtils.renderIntoDocument(<TodoList todos={todos} />);
		let list = testUtils.scryRenderedDOMComponentsWithTag(todoList, 'ul');
		let listItems = testUtils.scryRenderedDOMComponentsWithTag(todoList, 'li');
		expect(listItems.length).toEqual(2);
		expect(list.length).toEqual(1);
	});
	it("should have no list if an empty array of todos is passed", () => {
		let todoList = testUtils.renderIntoDocument(<TodoList todos={emptyTodos} />);
		let list = testUtils.scryRenderedDOMComponentsWithTag(todoList, 'ul');
		expect(list.length).toEqual(0);
	});
});
