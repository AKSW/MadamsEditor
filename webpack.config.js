var path = require('path');

module.exports = {
  mode: 'development',
  // entry: './src/main.js',
  entry: path.resolve(__dirname, './src/main.js'),
  module: {
    rules: [
      {
        // required to get yaml working!
        test: /node_modules\/yaml\/browser\/dist\/.*/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },

      },

    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    // compress: true,
    port: 8080
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  // node: {
  //   fs: 'empty'
  // }
  resolve: {
    fallback: {
      fs: false,
      buffer: false,
      stream: false,
      vm: false,
      util: false
    }
  }
  // node: {
  //   global: true
  // }
};