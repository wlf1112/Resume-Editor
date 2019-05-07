/**
 * 
 * @authors wanglifeng
 * @date    2019-05-07 17:03:10
 * @version $1$
 */

const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

