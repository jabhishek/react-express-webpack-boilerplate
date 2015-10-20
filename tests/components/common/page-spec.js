import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
var testUtils = ReactAddons.addons.TestUtils;

import Page from '../../../client/components/common/Page';

describe("Page", function () {
    var page;

    it("should render the children passed to it", function () {
        page = testUtils.renderIntoDocument(
            <Page>
                <div className="test">Text</div>
            </Page>
        );
        var testElem = ReactDOM.findDOMNode(page).querySelector('.test');
        expect(testElem.innerText).toEqual('Text');
    });

    it("should render h1 with headerText passed", function () {
        page = testUtils.renderIntoDocument(
            <Page headerText="header"></Page>
        );
        var testElem = ReactDOM.findDOMNode(page).querySelector('h1');
        expect(testElem.innerText).toEqual('header');
    });

    it("should not render h1 if no headerText passed", function () {
        page = testUtils.renderIntoDocument(
            <Page></Page>
        );
        var testElem = ReactDOM.findDOMNode(page).querySelector('h1');
        expect(testElem).toBeNull();
    });

    it("should set the className passed as the parameter", function () {
        page = testUtils.renderIntoDocument(
            <Page className="my-page"></Page>
        );
        var testElem = ReactDOM.findDOMNode(page);
        expect(testElem.classList.contains('my-page')).toBeTruthy();
    });
});