import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
import Home from './../../../client/components/home/homePage';
var testUtils = ReactAddons.addons.TestUtils;

console.log(Home.__Rewire__);

describe("HomePage", function() {
	beforeEach(function() {
		Home.__Rewire__('Page', React.createClass({
			render: function() { return <div {...this.props}>Blah!!</div>; }
		}));
	});

	afterEach(function() {
		Home.__ResetDependency__('Page');
	});

	it("should be a composite component", function() {
		var homePage = testUtils.renderIntoDocument(<Home />);
		expect(testUtils.isCompositeComponent(homePage)).toBeTruthy();
	});
});
