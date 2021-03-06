/**
 * Build configuration.
 *
 * This will build the app with the result in the build/ folder
 * Javascript dependencies are built to a separate file as are css
 * and the main html file.
 *
 * The main entry point for the application is src/index.jsx
 */

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: './index.jsx',
    vendor: ['react', 'd3', 'lodash', 'redux', 'immutable']
  },
  output: {
    path: __dirname + '/build',
    filename: 'komparator-app.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/, //loader: "style!css!sass"
        loader: ExtractTextPlugin.extract("style", "css")
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"komparator-app.deps.js"),
    new ExtractTextPlugin("index.css")
  ]
};
