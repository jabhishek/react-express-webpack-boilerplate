import React from 'react';
import classnames from 'classnames';

export default class Page extends React.Component {
    render() {
        var classList = classnames("page", this.props.className);
        var header;
        if (this.props.headerText) {
            header = <h1>{ this.props.headerText }</h1>;
        }
        return (
            <div className={ classList }>
                { header }
                { this.props.children }
            </div>
        )
    }
}

Page.propTypes = {
  className: React.PropTypes.string,
  headerText: React.PropTypes.string
};