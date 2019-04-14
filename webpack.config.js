const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    script: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }],
  },
}

