'use strict';

var config = require('./configuration');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = {
    entry: [
        'webpack/hot/dev-server',
        config.paths.entryFile
    ],
    output: {
        filename: 'bundle.js',
        path: config.paths.buildDir
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'ng-annotate!babel!eslint'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2)/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.paths.index,
            inject: true,
            devServer: 'http://localhost:8080/webpack-dev-server.js'
        })
    ]
};

module.exports = webpack;
