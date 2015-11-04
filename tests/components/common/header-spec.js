import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
var testUtils = ReactAddons.addons.TestUtils;

import stubRouterContext from '../../utils/stubRouterContext';
import Header from '../../../client/components/common/header';

describe("header", function () {


    describe("structure", function () {
        var HeaderWrapper, header;
        beforeEach(function () {
            HeaderWrapper = stubRouterContext(Header);
            header = testUtils.renderIntoDocument(<HeaderWrapper />);
        });

        it("should be a composite component", function () {
            expect(testUtils.isCompositeComponent(header)).toBeTruthy();
        });

        it("should have an app title with text ReactApp", function () {
            var appTitleNode = ReactDOM.findDOMNode(header).querySelector('.appTitle a');
            expect(appTitleNode.innerText).toEqual('ReactApp');
        });

        it("should have class navbar", function () {
            var headerNode = ReactDOM.findDOMNode(header);
            expect(headerNode.classList.contains('navbar')).toBeTruthy();
        });

        it("should have a ul with class nav", function () {
            var nav = testUtils.scryRenderedDOMComponentsWithClass(header, 'nav');
            expect(nav.length).toEqual(1);
        });

        it("nav should not have class expanded", function () {
            var nav = testUtils.findRenderedDOMComponentWithClass(header, 'nav');
            var navNode = ReactDOM.findDOMNode(nav);
            expect(navNode.classList.contains('expanded')).toBeFalsy();
        });
        it("should have an icon with class fa-bars", function () {
            var icon = testUtils.scryRenderedDOMComponentsWithClass(header, 'fa-bars');
            expect(icon.length).toEqual(1);
        });
    });

    describe("behavior", function () {
        var HeaderWrapper, header;

        var clickToggleIcon = () => {
            var icon = testUtils.findRenderedDOMComponentWithClass(header, 'fa-bars');
            testUtils.Simulate.click(icon);
        };

        beforeEach(function () {
            HeaderWrapper = stubRouterContext(Header);
            header = testUtils.renderIntoDocument(<HeaderWrapper />);
        });

        it("should toggle class expanded on nav when icon is clicked", function () {
            var nav = testUtils.findRenderedDOMComponentWithClass(header, 'nav');
            var navDOM = ReactDOM.findDOMNode(nav);

            clickToggleIcon();
            expect(navDOM.classList.contains('expanded')).toBeTruthy();

            clickToggleIcon();
            expect(navDOM.classList.contains('expanded')).toBeFalsy();
        });

        it("should collapse the menu when a link is clicked", function () {
            var nav = testUtils.findRenderedDOMComponentWithClass(header, 'nav');
            var navDOM = ReactDOM.findDOMNode(nav);

            var links = Array.from(ReactDOM.findDOMNode(header).querySelectorAll('.nav a'));
            links.forEach(function (link) {
                clickToggleIcon();
                expect(navDOM.classList.contains('expanded')).toBeTruthy();
                testUtils.Simulate.click(link);
                expect(navDOM.classList.contains('expanded')).toBeFalsy();
            });
        });
    });
});
