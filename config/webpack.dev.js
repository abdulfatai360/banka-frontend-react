const DotenvPlugin = require('dotenv-webpack');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [new DotenvPlugin({ path: './.env.development' })],
};
