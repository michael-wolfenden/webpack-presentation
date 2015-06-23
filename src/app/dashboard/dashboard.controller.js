'use strict';

class DashboardController {
    constructor($log, $timeout) {
        this.message = 'Message from Dashboard Controller';
        $log.log(`DashboardController activated: ${this.message}`);

        $timeout(() => {
            this.message = 'Message from Dashboard Controller - After timeout';
        }, 3000);
    }
}

export default DashboardController;
