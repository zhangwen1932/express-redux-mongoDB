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
  devServer: {
    port: 2700,
    historyApiFallback: true,
    hot: true,
  },
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
        ],
      }, {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
        ],
      }, {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
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
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
