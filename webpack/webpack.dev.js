const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
