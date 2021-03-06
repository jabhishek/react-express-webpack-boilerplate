import React from 'react';
import classnames from 'classnames';
import styles from './page.less';

export default class Page extends React.Component {
    render() {
        const classList = classnames(styles.page, this.props.className);
        let header;
        if (this.props.headerText) {
            header = <h1>{ this.props.headerText }</h1>;
        }
        return (
            <div className={ classList }>
                { header }
                { this.props.children }
            </div>
        );
    }
}

Page.propTypes = {
    className: React.PropTypes.string,
    headerText: React.PropTypes.string,
    children: React.PropTypes.any
};
