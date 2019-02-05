'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: [
    path.join(__dirname, '../src/index.js'),
    'bootstrap-loader',
  ],
  cache: false,
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
    }),

  ],
  module: defaultSettings.getDefaultModules(),
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
  }],
  exclude: [/conf/, /controller/, /middleware/, /endpoint/, /service/],
  include: [
    path.join(__dirname, '/../src/')
  ],
});

module.exports = config;
