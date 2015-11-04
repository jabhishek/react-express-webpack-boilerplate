import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import header from './Header.less';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {isExpanded: false};
	}

	onToggleClick() {
		this.setState({isExpanded: !this.state.isExpanded});
	}

	onLinkClick() {
		this.setState({isExpanded: false});
	}

	render() {
		const ulClassList = classnames(header.nav, {
			[header.expanded]: this.state.isExpanded
		});

		return (
			<nav className={ header.navbar }>
				<div className={header.navbarContainer}>
					<div className={header.navbarHeader}>
						<div className={header.appTitle}>
							<Link to="/home">ReactApp</Link>
						</div>

						<i className="fa fa-bars" onClick={this.onToggleClick.bind(this)}></i>
					</div>
					<ul className={ulClassList}>
						<li><Link to="/home" activeClassName={header.active} onClick={this.onLinkClick.bind(this)}>Home</Link></li>
						<li><Link to="/about" activeClassName={header.active} onClick={this.onLinkClick.bind(this)}>About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
}
