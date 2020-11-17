const baseConfig = require('./webpack.config');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { build } = require('../paths');

const config = {
  // webpack mode 
  mode: 'development',

  // overload output
  output: {
    path: build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // source map type
  devtool: 'inline-source-map',

  // devserver options
  devServer: {
    historyApiFallback: true,
    contentBase: build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    // hot update 
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(baseConfig, config);
