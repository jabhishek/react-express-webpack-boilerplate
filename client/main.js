import React from 'react';
import Router from 'react-router';
import routes from './routes';
import Main from './main.less';

//React.render(<App />, document.getElementById('root'));

Router.run(routes, Router.HistoryLocation, (Root) => {
	React.render(<Root/>, document.getElementById('root'));
});

