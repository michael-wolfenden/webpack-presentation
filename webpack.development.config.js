'use strict';

var config = require('./configuration');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = {
    entry: config.paths.entryFile,
    output: {
        filename: 'bundle.js',
        path: config.paths.buildDir
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.paths.index,
            inject: true
        })
    ]
};

module.exports = webpack;
