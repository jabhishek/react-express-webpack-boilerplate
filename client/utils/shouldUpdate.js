import React from 'react';
import _ from 'lodash';

export default function shouldUpdate(...args) {
	return (Component) => {
		return class Wrapper extends React.Component {
			shouldComponentUpdate(nextProps) {
				let hasChanged = false;
				args.forEach((prop) => {
					if (!_.isEqual(nextProps[prop], this.props[prop])) {
						hasChanged = true;
					}
				}, this);
				return hasChanged;
			}

			render() {
				return <Component {...this.props }/>;
			}
		};
	};
}
