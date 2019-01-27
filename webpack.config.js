const path = require('path');
const webpack = require('webpack');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV;
const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';
const ENV_TEST = NODE_ENV === 'test';

//=========================================================
//  RULES
//---------------------------------------------------------
const rules = {
  styles: {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  },
  files: {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    query: {
      name: '[name].[ext]?[hash]'
    }
  },
  polymer: {
    test: /\.html$/,
    loader: 'wc-loader?minify=true',
  }
};

//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = module.exports = {};

config.entry = {
  main: './src/main.js'
};

config.output = {
  path: path.resolve(__dirname, './dist'),
  publicPath: '/dist/',
  filename: 'build.js'
};

config.externals = {};

config.module = {
  rules: [
    rules.polymer,
    rules.files,
    rules.styles
  ]
};

config.devServer = {
  historyApiFallback: true,
};

if (!ENV_PRODUCTION) {
  config.devtool = 'eval-source-map';
}