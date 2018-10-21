const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const {
  baseConfig,
  cssLoaderOptions,
  projectRootDir
} = require('./webpack.base.config.js');

cssLoaderOptions.sourceMap = false;

const prodConfig = merge.smart(baseConfig, {
  mode: 'production',

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  },

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle-[hash].js',
    publicPath: 'dist/'
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'typings-for-css-modules-loader',
              options: cssLoaderOptions
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },

      {
        test: /\.(jpe?g|png)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 80
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], { root: projectRootDir }),
    new ExtractTextPlugin('styles-[md5:contenthash:hex:20].css')
  ]
});

module.exports = prodConfig;
