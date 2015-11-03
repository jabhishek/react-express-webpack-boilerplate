import React from 'react';
import Page from '../common/Page';
import './aboutPage.less';

export default class AboutPage extends React.Component {
    render() {
        return (
            <Page className="aboutPage" headerText="About">
                <p className="subtitle">This application uses the following technologies:-</p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Ecmascript 2015 (ES6)</li>
                    <li>Nodejs</li>
                    <li>Express</li>
                    <li>Webpack</li>
                </ul>
            </Page>
        );
    }
}

