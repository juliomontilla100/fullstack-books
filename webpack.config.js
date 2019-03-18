const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {

    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './frontend/index.html',
        }),
        new miniCssExtractPlugin({
            filename: "css/bundle.css",
        })
    ],

    devtool: 'source-map'
    
}