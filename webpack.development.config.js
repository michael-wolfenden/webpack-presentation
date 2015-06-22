'use strict';

var config = require('./configuration');
var webpack = require('webpack');

var webpack = {
    entry: config.paths.entryFile,
    output: {
        filename: 'bundle.js',
        path: config.paths.buildDir
    }
};

module.exports = webpack;
