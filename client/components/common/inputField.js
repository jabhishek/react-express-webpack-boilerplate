import React from 'react';

export default class InputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: ''};
	}

	setValueState(value = '') {
		this.setState({ value: value });
	}

	onChange(e) {
		this.setValueState(e.target.value);
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
		return (
			<div className="inputField">
				<label htmlFor={this.props.name}>{ this.props.labelText }</label>
				<input type="text"
					   name={this.props.name}
					   value={this.state.value}
					   onChange={this.onChange.bind(this)}
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
