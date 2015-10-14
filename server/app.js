/* eslint no-console: 0 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./../webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const defaultPort = 8000;
const port = isDeveloping ? defaultPort : (process.env.PORT || defaultPort);
const app = express();
var rootPath = path.normalize(__dirname + '/..');
app.use(express.static(rootPath + '/dist'));

if (isDeveloping) {
	const compiler = webpack(config);

	var server = new webpackDevServer(compiler, {
		publicPath: config.output.publicPath,
		historyApiFallback: true,
		hot: true
	});

	server.listen(8080);
} else {
	app.get('*', function response(req, res) {
		res.sendFile(path.join(rootPath, 'dist/index.html'));
	});

	app.listen(port, function onStart(err) {
		if (err) {
			console.log(err);
		}
	});
}



