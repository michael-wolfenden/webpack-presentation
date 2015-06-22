'use strict';

var angular = require('angular');

var dashboardController = require('./dashboard.controller');
var dashboardRoute = require('./dashboard.route');

var dashboardModule = angular
    .module('app.dashboard', [])
    .controller('DashboardController', dashboardController)
    .config(dashboardRoute);

module.exports = dashboardModule;
