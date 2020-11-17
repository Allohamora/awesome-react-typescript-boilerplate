const baseConfig = require('./webpack.config');
const { merge } = require('webpack-merge');

const config = {
  mode: 'production',
  target: ['web', 'es5'],

  devtool: false,

  optimization: {
    minimize: true,
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

module.exports = merge(baseConfig, config);
