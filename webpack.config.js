const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    // publicPath must be the same as output path of production mode otherwise webpack won't load from RAM
    publicPath: '/build/',
    port: 8080,
    proxy: {
      // add routes to send to server here
      // '/start': 'http://localhost:3000',
    }
  }
};
