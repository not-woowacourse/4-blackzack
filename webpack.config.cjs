
const { DEFAULT_EXTENSIONS } = require('@babel/core');
const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
};
