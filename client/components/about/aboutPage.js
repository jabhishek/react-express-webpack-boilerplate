import React from 'react';
import Page from '../common/Page';
import pageStyles from '../common/page.less';

export default class AboutPage extends React.Component {
    render() {
        return (
            <Page headerText="About">
                <p className={pageStyles.subtitle}>This application uses the following libraries/frameworks/techs:-</p>
                <ul>
                    <li>React</li>
                    <li>Flux (Altjs)</li>
                    <li>React Router</li>
                    <li>Ecmascript 2015 (ES6)</li>
                    <li>Nodejs</li>
                    <li>Express</li>
                    <li>Webpack</li>
                    <li>CSS Modules</li>
                </ul>
            </Page>
        );
    }
}

