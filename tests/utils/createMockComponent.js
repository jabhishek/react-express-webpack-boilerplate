import React from 'react';

// very naive object mocker, but the idea IS to not to create very complex mock objects
export default function (params) {
	return React.createClass({
		render: function () {
			let propElements = [];
			const propKeys = Object.keys(this.props);
			propKeys.forEach((prop) => {
				let content;
				if (!Array.isArray(this.props[prop]))
					content = this.props[prop];
				else {
					// you can even spread the array and spit out all the elements, but this serves our purpose
					content = this.props[prop].length;
				}
				propElements.push((<div key={prop} className={prop}>{content}</div>));
			});
			return <div className={params.className}>
				{propElements}
			</div>;
		}
	})
};
