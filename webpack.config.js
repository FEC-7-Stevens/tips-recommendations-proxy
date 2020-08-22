const path = require('path');

module.exports = {
    entry: './server/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/client/dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    watch: true,
    mode: 'development',
    target: 'node'
  }
