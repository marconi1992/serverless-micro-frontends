const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const client = {
  target: 'web',
  node: {
    fs: 'empty',
    module: 'empty',
  },
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
  },
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
  plugins: [
    new VueLoaderPlugin(),
  ],
};

module.exports = client;
