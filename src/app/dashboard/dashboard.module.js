'use strict';

import './dashboard.less';

import angular from 'angular';

import DashboardController from './dashboard.controller';
import dashboardRoute from './dashboard.route';

let dashboardModule = angular
    .module('app.dashboard', [])
    .controller('DashboardController', DashboardController)
    .config(dashboardRoute);

export default dashboardModule;
