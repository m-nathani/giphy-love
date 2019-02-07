/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
const giphyPort = process.env.PORT || config.devServer.port

new WebpackDevServer(webpack(config), config.devServer)
  .listen(giphyPort, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at :' + giphyPort);
    console.log('Opening your system browser...');
    // open('http://localhost:' + giphyPort + '/webpack-dev-server/');
  });
