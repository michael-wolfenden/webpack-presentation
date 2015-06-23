'use strict';

import angular from 'angular';
import router from 'angular-ui-router';
import dashboard from './dashboard/dashboard.module';

angular.module('app', [
    router,
    dashboard.name
]);
