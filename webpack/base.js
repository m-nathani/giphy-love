'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
//  let additionalPaths = [];

module.exports = {
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: `.${defaultSettings.publicPath}`
  },
  devServer: {
    contentBase: defaultSettings.srcPath,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    disableHostCheck: true,
    compress: true,
    progress: true,
    inline: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      action: `${defaultSettings.srcPath}/action/`,
      app: `${defaultSettings.srcPath}/app/`,
      constant: `${defaultSettings.srcPath}/constant/`,
      component: `${defaultSettings.srcPath}/component/`,
      container: `${defaultSettings.srcPath}/container/`,
      reducer: `${defaultSettings.srcPath}/reducer/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      images: `${defaultSettings.srcPath}/images/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {}
};
