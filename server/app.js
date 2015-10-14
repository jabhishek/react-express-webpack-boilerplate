/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './../webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const defaultPort = 8000;
const port = isDeveloping ? defaultPort : (process.env.PORT || defaultPort);
const app = express();
var rootPath = path.normalize(__dirname + '/..');
app.use(express.static(rootPath + '/dist'));

if (isDeveloping) {
	const compiler = webpack(config);

	var server = new webpackDevServer(webpack(config), {
		publicPath: config.output.publicPath,
		historyApiFallback: true
	});

	app.use(webpackHotMiddleware(compiler));

	server.listen(8080);


} else {
	app.get('*', function response(req, res) {
		res.sendFile(path.join(rootPath, 'dist/index.html'));
	});

	app.listen(port, 'localhost', function onStart(err) {
		if (err) {
			console.log(err);
		}
		console.info('==> ? Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
	});
}



