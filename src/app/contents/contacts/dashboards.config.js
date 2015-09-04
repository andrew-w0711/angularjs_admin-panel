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
            name: 'MENU.CONTACTS.CONTACTS',
            icon: 'icon-contacts',
            type: 'dropdown',
            priority: 1,
            children: [{
                name: 'MENU.CONTACTS.ORGANIZATIONS',
                state: 'triangular.admin-default.dashboard-analytics',
                type: 'link'
            }]
        });

    }
})();