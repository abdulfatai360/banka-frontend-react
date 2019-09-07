const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      { test: /\.(woff|woff2)$/, use: [{ loader: 'url-loader' }] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Banka | Lightweight Core Banking Application',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@Components': path.resolve(__dirname, '..', 'src', 'components'),
      '@Containers': path.resolve(__dirname, '..', 'src', 'containers'),
      '@Store': path.resolve(__dirname, '..', 'src', 'store'),
      '@Actions': path.resolve(__dirname, '..', 'src', 'actions'),
      '@Reducers': path.resolve(__dirname, '..', 'src', 'reducers'),
      '@Constants': path.resolve(__dirname, '..', 'src', 'constants'),
      '@Services': path.resolve(__dirname, '..', 'src', 'services'),
      '@Assets': path.resolve(__dirname, '..', 'src', 'assets'),
      '@App': path.resolve(__dirname, '..', 'src'),
    },
  },
};
