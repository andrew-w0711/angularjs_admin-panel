(function() {
    'use strict';

    angular
        .module('app.contents.contacts')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/contents/contacts');

        $stateProvider
        .state('triangular.admin-default.dashboard-analytics', {
            url: '/contacts/organizations',
            templateUrl: 'app/contents/contacts/dashboard-analytics.tmpl.html',
            controller: 'DashboardAnalyticsController',
            controllerAs: 'vm'
        })

        triMenuProvider.addMenu({
            name: 'Contacts',
            icon: 'icon-contacts',
            type: 'dropdown',
            priority: 2.1,
            children: [{
                name: 'Organizations',
                state: 'triangular.admin-default.dashboard-analytics',
                type: 'link'
            }]
        });

    }
})();