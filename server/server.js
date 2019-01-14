import path from 'path';
import Express from 'express';
import Webpack from 'webpack';
import httpProxy from 'http-proxy';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import config from '../config/config';
import webpackConfig from '../webpack.dev';


const app = new Express();
const port = config;

app.use('/', Express.static(path.join(__dirname, '..', 'public')));

const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
});
// 代理
app.use('/api', (req, res) => {
  proxy.web(req, res, { target: targetUrl });
});

// 热更新
if (process.env.NODE_ENV !== 'production') {
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
