var path = require('path');
var webpack = require('webpack');

var config = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    // compress: true,
    port: 8080,
    injectClient: false
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: '/',
    // library not working in dev mode
    // see https://github.com/webpack/webpack-dev-server/issues/2484
    library: 'MadamsEditor',
    libraryTarget: 'var'
  },
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
}



module.exports = (env, argv ) => {

  config.plugins = [
    new webpack.DefinePlugin({
      'process':  { 'env' : argv.mode === 'development'
        ? JSON.stringify('development')
        : JSON.stringify('production')
      },
    })
  ];

  return config;
};