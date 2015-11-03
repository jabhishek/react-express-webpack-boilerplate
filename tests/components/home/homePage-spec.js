import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
import Home from './../../../client/components/home/homePage';
import TodoStore from './../../../client/stores/todoStore';
import TodoActions from './../../../client/actions/todoActions';
import createMockComponent from '../../utils/createMockComponent';

var testUtils = ReactAddons.addons.TestUtils;

describe("HomePage", () => {
	beforeEach(() => {
		Home.__Rewire__('Page', createMockComponent({className: 'page'}));
		Home.__Rewire__('TodoSection', createMockComponent({ className: 'todo-section'}));
	});

	afterEach(() => {
		Home.__ResetDependency__('Page');
		Home.__ResetDependency__('TodoSection');
	});

	it("should be a composite component", () => {
		let homePage = testUtils.renderIntoDocument(<Home />);
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
		const homeNode = ReactDOM.findDOMNode(home);
		const todoSectionNode = homeNode.querySelectorAll('.todo-section .todos')[0];
		expect(todoSectionNode.innerText).toEqual('1');
	});

	it("should have a header containing the count of todos", () => {
		spyOn(TodoStore, 'getState').and.returnValue({todos: [{text: "Hey!!"}, {text: "Hello!!"}]});
		const home = testUtils.renderIntoDocument(<Home />);
		const header = testUtils.findRenderedDOMComponentWithClass(home, 'headerText');
		const headerNode = ReactDOM.findDOMNode(header);
		expect(headerNode.innerText).toEqual('Todos (2 Incomplete)');
	});

	it("onTodoSave method should call addTodo action", () => {
		spyOn(TodoActions, 'addTodo');
		const home = testUtils.renderIntoDocument(<Home />);

		// hacky - is there a better way??
		home._reactInternalInstance._renderedComponent._instance.onTodoSave('Hey!!');
		expect(TodoActions.addTodo).toHaveBeenCalledWith('Hey!!');
	});
});
