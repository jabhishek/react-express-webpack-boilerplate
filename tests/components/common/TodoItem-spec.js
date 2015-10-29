import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from '../../../client/components/common/TodoItem';
import ReactAddons from 'react/addons';
var testUtils = ReactAddons.addons.TestUtils;

describe("TodoList", () => {
	const todo = {id: 1, text: "Some todo"};

	it("should display the todo information", () => {
		let todoItem = testUtils.renderIntoDocument(<TodoItem todo={todo} />);
		expect(ReactDOM.findDOMNode(todoItem).textContent).toEqual("Some todo");
	})
});
