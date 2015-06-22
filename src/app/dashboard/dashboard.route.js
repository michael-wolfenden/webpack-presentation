(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(addRoute);

    function addRoute($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                controller: 'DashboardController as vm',
                template: '<div><h1>{{vm.message}}</h1></div>'
            });
        }
})();
