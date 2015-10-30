import React from 'react';
import ReactDOM from 'react-dom';
import InputField from '../../../client/components/common/inputField';
import ReactAddons from 'react/addons';
var testUtils = ReactAddons.addons.TestUtils;


describe("InputField", () => {
	let input, label;
	function createControl(props) {
		let inputField = testUtils.renderIntoDocument(
			<InputField
				{...props}/>
		);
		input = testUtils.findRenderedDOMComponentWithTag(inputField, 'input');
		label = testUtils.findRenderedDOMComponentWithTag(inputField, 'label');
		return inputField;
	}

	it("should have an input", () => {
		createControl(null);
		expect(input).toBeDefined();
	});

	it("should assign the given text to label", () => {
		createControl({labelText:"Label"});
		expect(ReactDOM.findDOMNode(label).textContent).toEqual('Label');
	});

	it("should assign the given name attribute to input", () => {
		createControl({name:"todo"});
		expect(ReactDOM.findDOMNode(label).getAttribute('for')).toEqual('todo');
		expect(ReactDOM.findDOMNode(input).name).toEqual('todo');
	});

	it("should call the given onSave event handler on enter", () => {
		var spy = jasmine.createSpy('spy');
		createControl({onSave:spy});
		let inputNode = ReactDOM.findDOMNode(input);
		inputNode.value = 'Test';
		testUtils.Simulate.change(inputNode);
		testUtils.Simulate.keyDown(inputNode, {key: "Enter", keyCode: 13, which: 13});
		expect(spy).toHaveBeenCalledWith('Test');
	});

	it("should clear the input on enter", () => {
		var spy = jasmine.createSpy('spy');
		createControl({onSave:spy});
		let inputNode = ReactDOM.findDOMNode(input);
		inputNode.value = 'Test';
		testUtils.Simulate.change(inputNode);
		testUtils.Simulate.keyDown(inputNode, {key: "Enter", keyCode: 13, which: 13});

		expect(inputNode.value).toEqual('');
	});
});
