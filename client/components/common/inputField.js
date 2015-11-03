import React from 'react';
import classnames from 'classnames';
import './inputField.less';

export default class InputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			hasFocus: false
		};
	}

	hasValue() {
		return this.state.value !== '';
	}

	setValueState(value = '') {
		this.setState({value: value});
	}

	onChange(e) {
		this.setValueState(e.target.value);
	}

	onFocus() {
		this.setState({hasFocus: true});
	}

	onBlur() {
		this.setState({hasFocus: false});
	}

	onKeyDown(e) {
		switch (e.keyCode) {
			case 13:
				this.setValueState('');
				if (this.props.onSave) {
					this.props.onSave(e.target.value);
				}
				break;
			default:
		}
	}

	render() {
		const classList = classnames('inputField',
			{'has-focus': this.state.hasFocus},
			{'has-value': this.hasValue()}
		);
		return (
			<div className={classList}>
				<label htmlFor={this.props.name}>{ this.props.labelText }</label>
				<input type="text"
				       name={this.props.name}
				       value={this.state.value}
				       onChange={this.onChange.bind(this)}
				       onFocus={this.onFocus.bind(this)}
				       onBlur={this.onBlur.bind(this)}
				       onKeyDown={this.onKeyDown.bind(this)}/>
			</div>
		);
	}
}

InputField.propTypes = {
	labelText: React.PropTypes.string,
	onSave: React.PropTypes.func,
	name: React.PropTypes.string
};
