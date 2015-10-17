import React from 'react';
import Header from './components/common/header';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="view">
                    {this.props.children}
                </div>
            </div>
        );
    }
}