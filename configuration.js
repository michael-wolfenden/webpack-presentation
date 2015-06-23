'use strict';

var path = require('path');
var srcDir = path.join(__dirname, 'src');
var buildDir = path.join(__dirname, 'build');
var appDir = path.join(srcDir, 'app');
var entryFile = path.join(appDir, 'app.module.js');
var index = path.join(srcDir, 'index.html');

var exports = {
    paths: {
        entryFile: entryFile,
        buildDir: buildDir,
        index: index
    }
};

module.exports = exports;
