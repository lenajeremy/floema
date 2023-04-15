const path = require('path')
const defaultConfig = require('./webpack.config')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports = merge(defaultConfig, {
    mode: 'production',
    output: {
        path: path.join(__dirname, 'public'),
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})