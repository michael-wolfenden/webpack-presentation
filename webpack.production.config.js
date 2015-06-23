'use strict';

var config = require('./configuration');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = {
    entry: {
        app: config.paths.entryFile,
        vendor: config.vendorsToBundleSeperately
    },
    output: {
        filename: 'assets/js/app-[hash:6].js',
        path: config.paths.buildDir
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'ng-annotate!babel!eslint'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css!less')
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2)/,
            loader: 'file?name=assets/fonts/[name].[ext]'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            'vendor',
            'assets/js/vendor-[chunkhash:6].js'
        ),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.paths.index,
            inject: true
        }),

        new ExtractTextPlugin('assets/css/app-[chunkhash:6].css')
    ]
};

module.exports = webpack;
