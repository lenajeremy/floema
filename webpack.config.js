const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

const appDir = path.join(__dirname, 'app')
const sharedDir = path.join(__dirname, 'shared')
const stylesDir = path.join(__dirname, 'styles')
const nodeModules = 'node_modules'

module.exports = {
  entry: [path.join(appDir, 'index.js'), path.join(stylesDir, 'index.scss')],

  resolve: {
    modules: [appDir, sharedDir, stylesDir, nodeModules],
  },

  plugins: [
    new webpack.DefinePlugin({ IS_DEVELOPMENT }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './shared',
          to: '',
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif|woff2?|fnt|webp)$/,
        loader: 'file-loader',
      },
    ],
  },
}
