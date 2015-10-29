import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
import Home from './../../../client/components/home/homePage';
import TodoStore from './../../../client/stores/todoStore';
var testUtils = ReactAddons.addons.TestUtils;

describe("HomePage", () => {
	beforeEach(() => {
		Home.__Rewire__('Page', React.createClass({
			render: function () {
				return <div>{ this.props.children }</div>;
			}
		}));
		Home.__Rewire__('TodoSection', React.createClass({
			render: function () {
				return <div className="todo-section">{this.props.todos.length}</div>;
			}
		}));
	});

	afterEach(() => {
		Home.__ResetDependency__('Page');
		Home.__ResetDependency__('TodoSection');
	});

	it("should be a composite component", () => {
		let homePage = testUtils.renderIntoDocument(<Home />);
		console.log(ReactDOM.findDOMNode(homePage));
		expect(testUtils.isCompositeComponent(homePage)).toBeTruthy();
	});

	it("should call TodoStore.getState on creation", () => {
		spyOn(TodoStore, 'getState').and.returnValue({todos: []});
		testUtils.renderIntoDocument(<Home />);
		expect(TodoStore.getState).toHaveBeenCalled();
	});

	it("should render TodoSection component correctly", () => {
		spyOn(TodoStore, 'getState').and.returnValue({todos: [{text: "Hey!!"}]});
		const home = testUtils.renderIntoDocument(<Home />);
		const todoSection = testUtils.findRenderedDOMComponentWithClass(home, 'todo-section');
		const todoSectionNode = ReactDOM.findDOMNode(todoSection);
		expect(todoSectionNode.innerText).toEqual('1');
	});
});
