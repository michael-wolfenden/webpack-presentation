(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    function DashboardController() {
        var vm = this;
        vm.message = 'Hello from Dashboard Controller';
    }
})();
