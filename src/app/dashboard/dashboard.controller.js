'use strict';

function DashboardController($log) {
    var vm = this;
    vm.message = 'Message from Dashboard Controller';

    $log.log('DashboardController activated:' + vm.message);
}

module.exports = DashboardController;
