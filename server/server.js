/* eslint-disable global-require */
import path from 'path';
import Express from 'express';
import httpProxy from 'http-proxy';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import config from '../config/config';

const app = new Express();
const { port } = config;

const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
});
// 代理
app.use('/api', (req, res) => {
  proxy.web(req, res, { target: targetUrl });
});

app.use('/', connectHistoryApiFallback());
app.use('/', Express.static(path.join(__dirname, '..', 'public')));

// 热更新
if (process.env.NODE_ENV !== 'production') {
  const Webpack = require('webpack');
  const WebpackDevMiddleware = require('webpack-dev-middleware');
  const WebpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.dev');

  const compiler = Webpack(webpackConfig);

  app.use(WebpackDevMiddleware(compiler, {
    publicPath: '/',
    stats: { colors: true },
    lazy: false,
  }));
  app.use(WebpackHotMiddleware(compiler));
}

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`);
  }
});
