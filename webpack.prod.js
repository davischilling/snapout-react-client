const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  externals: {
    react: 'React',
    axios: 'axios',
    recoil: 'Recoil',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
  plugins: [
    new CompressionPlugin(),
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://snapout-server-api.herokuapp.com/api')
    }),
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-bundle-[chunkhash].css'
    }),
    new FaviconsWebpackPlugin({
      logo: './public/favicon.png'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: 'public'
        }
      ]
    })
  ]
})
