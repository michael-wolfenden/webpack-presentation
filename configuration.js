'use strict';

var path = require('path');
var srcDir = path.join(__dirname, 'src');
var buildDir = path.join(__dirname, 'build');
var appDir = path.join(srcDir, 'app');
var entryFile = path.join(appDir, 'app.module.js');

var exports = {
    paths: {
        entryFile: entryFile,
        buildDir: buildDir
    }
};

module.exports = exports;
