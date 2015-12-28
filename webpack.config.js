var path = require("path");


var build_path = 'build';

module.exports = {
  
  entry: {
    'polyfills': './src/polyfills.js',
    'app': './src/boot.js'
  },

  output: {
    path: './' + build_path,
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: [
            'angular2-annotations',
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-flow-strip-types',
            ],
          presets: ['es2015']
        }
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: 'src/public',
    publicPath: '/' + build_path,
  }
};