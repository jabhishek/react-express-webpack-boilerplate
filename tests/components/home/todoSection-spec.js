import React from 'react';
import ReactDOM from 'react-dom';
import TodoSection from '../../../client/components/home/TodoSection';
import ReactAddons from 'react/addons';
var testUtils = ReactAddons.addons.TestUtils;

describe("TodoSection", () => {
	const todos = [{id: 1, text: "Todo - 1"}, {id: 2, text: "Todo - 2"}];

	beforeEach(() => {
		TodoSection.__Rewire__('TodoList', React.createClass({
			render: function () {
				return (<div className="todo-list">
					{this.props.todos.length}
				</div>);
			}
		}));
	});

	afterEach(() => {
		TodoSection.__ResetDependency__('TodoList');
	});

	it("should render TodoList component correctly", () => {
		let todoSection = testUtils.renderIntoDocument(<TodoSection todos={todos}/>);
		var todoList = testUtils.findRenderedDOMComponentWithClass(todoSection, 'todo-list');
		expect(ReactDOM.findDOMNode(todoList).textContent).toEqual('2');
	})
});
