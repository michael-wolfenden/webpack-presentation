'use strict';

import dashboardTemplate from './dashboard.html';

/* @ngInject */
function dashboardRoute($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardController as vm',
            template: dashboardTemplate
        });
}

export default dashboardRoute;
