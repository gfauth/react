var webpack = require('webpack');
var path = require('path');
var appConfig = require('./../application.config');
var appEnv = process.env.APP_ENV || 'development';

var sassLoaders = [
  'style-loader',
  'css-loader?sourceMap',
  'sass-loader?sourceMap',
];

module.exports = {
  devtool: '#source-map',
  debug: true,
  sassLoader: sassLoaders,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'APP_ENV': JSON.stringify(appEnv)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};
