'use strict';

function dashboardRoute($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardController as vm',
            template: '<div><h1>{{vm.message}}</h1></div>'
        });
}

module.exports = dashboardRoute;
