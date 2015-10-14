import React from 'react';
import Router from 'react-router';

var RouteHandler = Router.RouteHandler;

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="view">
                    <RouteHandler />
                </div>
            </div>
        );
    }
}