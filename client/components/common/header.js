import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import './Header.less';


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
		const ulClassList = classnames({
			'nav': true
		}, {
			'expanded': this.state.isExpanded
		});

		return (
			<nav className="navbar">
				<div className="navbar-container">
					<div className="navbar-header">
						<div className="app-title">
							<Link to="/home">ReactApp</Link>
						</div>

						<div className="user">
							Abhi
						</div>

						<i className="fa fa-bars" onClick={this.onToggleClick.bind(this)}></i>
					</div>
					<ul className={ulClassList}>
						<li><Link to="/home" activeClassName="active" onClick={this.onLinkClick.bind(this)}>Home</Link></li>
						<li><Link to="/about" activeClassName="active" onClick={this.onLinkClick.bind(this)}>About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
}
