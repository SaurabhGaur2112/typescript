const path = require('path');
const assets = require('./webpack.assets.js');
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: assets.PATHS.build,
    filename: "[name].js",
    chunkFilename: "[chunkhash:4].js",
    publicPath: '/assets/'
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"] 
  },
  module: {
    loaders: [
      { test: /\.ts$/, 
        loader: 'awesome-typescript-loader' 
      },
      { test: /\.tsx$/, 
        loader: 'awesome-typescript-loader'
       },
      { test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'react-hot-loader/webpack!babel-loader'
      // },
    ],
  },
  plugins: [new UglifyWebpackPlugin(),]
}

