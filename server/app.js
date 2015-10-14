/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
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

	app.use(webpackMiddleware(compiler, {
		publicPath: config.output.publicPath,
		stats: {
			colors: true,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false,
			modules: false
		}
	}));

	app.use(webpackHotMiddleware(compiler));
}



app.get('*', function response(req, res) {
	console.log('redirecting');
	console.log(rootPath);
	console.log('-----------------');
	res.sendFile(path.join(rootPath, 'dist/index.html'));
});

app.listen(port, 'localhost', function onStart(err) {
	if (err) {
		console.log(err);
	}
	console.info('==> ? Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
