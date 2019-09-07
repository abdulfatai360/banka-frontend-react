const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = ({ env }) => {
  const envSpecificConfig = require(`./webpack.${env}.js`);
  return webpackMerge(webpackCommonConfig, envSpecificConfig);
};
