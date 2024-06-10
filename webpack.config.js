const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: './dist.main.js',
  },
};