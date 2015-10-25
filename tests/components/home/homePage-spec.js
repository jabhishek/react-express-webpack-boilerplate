import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
import Home from './../../../client/components/home/homePage';
var testUtils = ReactAddons.addons.TestUtils;

describe("HomePage", function() {
	beforeEach(function() {
		Home.__Rewire__('Page', React.createClass({
			render: function() { return <div>{ this.props.children }</div>; }
		}));
	});

	afterEach(function() {
		Home.__ResetDependency__('Page');
	});

	it("should be a composite component", function() {
		var homePage = testUtils.renderIntoDocument(<Home />);
		var homePageElem = ReactDOM.findDOMNode(homePage);

		expect(testUtils.isCompositeComponent(homePage)).toBeTruthy();
	});
});
