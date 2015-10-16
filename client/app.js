import React from 'react';
import Router from 'react-router';
import Header from './components/common/header';
var RouteHandler = Router.RouteHandler;

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="view">
                    <RouteHandler />
                </div>
            </div>
        );
    }
}