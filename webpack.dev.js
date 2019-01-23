const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config/config');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app/index.js'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'test',
    }),
    new OpenBrowserPlugin({
      url: `http://${config.host}:${config.port}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'app'),
        ],
        loader: 'babel-loader',
      }, {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      }, {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          'postcss-loader',
        ],
      }, {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          'postcss-loader',
        ],
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name]-[hash:8].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx'],
  },
};
