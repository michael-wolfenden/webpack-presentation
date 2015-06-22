'use strict';

var angular = require('angular');
var router = require('angular-ui-router');
var dashboard = require('./dashboard/dashboard.module');

angular.module('app', [
    router,
    dashboard.name
]);
