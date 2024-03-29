const path = require('path')
const { merge } = require('webpack-merge')

const defaultConfig = require('./webpack.config')

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
  },
})
