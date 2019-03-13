const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const slsw = require('serverless-webpack');

const server = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};

module.exports = server;
