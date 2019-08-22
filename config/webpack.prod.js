const DotenvPlugin = require('dotenv-webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  plugins: [new DotenvPlugin({ path: './.env.production' })],
};
