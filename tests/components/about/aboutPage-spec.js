import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
import About from './../../../client/components/about/aboutPage';
var testUtils = ReactAddons.addons.TestUtils;

describe("AboutPage", () => {
	beforeEach(() => {
		About.__Rewire__('Page', React.createClass({
			render: function() { return <div>{ this.props.children }</div>; }
		}));
	});

	afterEach(() => {
		About.__ResetDependency__('Page');
	});

	it("should be a composite component", () => {
		let aboutPage = testUtils.renderIntoDocument(<About />);
		expect(testUtils.isCompositeComponent(aboutPage)).toBeTruthy();
	});
});
