import React from 'react';
import ReactAddons from 'react/addons';
import Home from './../../../client/components/home/homePage';
var testUtils = ReactAddons.addons.TestUtils;


describe("HomePage", function() {
	it("should be a composite component", function() {
		var homePage = testUtils.renderIntoDocument(<Home />);
		expect(testUtils.isCompositeComponent(homePage)).toBeTruthy();
	})
});
