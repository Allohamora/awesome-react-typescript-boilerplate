const { package } = require('./paths');
const { browserslist } = require(package);

const postCssPresetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');

const isProduction = process.env.NODE_ENV === 'production';

const productionPlugins = [
  cssNano(),
  postCssPresetEnv({ browsers: browserslist.production })
];

const developmentPlugins = [
  postCssPresetEnv({ browsers: browserslist.development })
];

module.exports = {  
  plugins: isProduction ? productionPlugins : developmentPlugins,
};
