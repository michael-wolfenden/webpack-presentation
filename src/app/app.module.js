'use strict';

import '../../node_modules/bootstrap/less/bootstrap.less';
import './app.less';

import angular from 'angular';
import router from 'angular-ui-router';
import dashboard from './dashboard/dashboard.module';

angular.module('app', [
    router,
    dashboard.name
]);
