(function() {
    'use strict';

    angular
        .module('app.contents.authentication')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/contents/authentication');

        $stateProvider
        .state('authentication', {
            abstract: true,
            templateUrl: 'app/contents/authentication/layouts/authentication.tmpl.html'
        })
        .state('authentication.login', {
            url: '/login',
            templateUrl: 'app/contents/authentication/login/login.tmpl.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('authentication.signup', {
            url: '/signup',
            templateUrl: 'app/contents/authentication/signup/signup.tmpl.html',
            controller: 'SignupController',
            controllerAs: 'vm'
        })
        .state('authentication.lock', {
            url: '/lock',
            templateUrl: 'app/contents/authentication/lock/lock.tmpl.html',
            controller: 'LockController',
            controllerAs: 'vm'
        })
        .state('authentication.forgot', {
            url: '/forgot',
            templateUrl: 'app/contents/authentication/forgot/forgot.tmpl.html',
            controller: 'ForgotController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.profile', {
            url: '/profile',
            templateUrl: 'app/contents/authentication/profile/profile.tmpl.html',
            controller: 'ProfileController',
            controllerAs: 'vm'
        });

        // triMenuProvider.addMenu({
        //     name: 'MENU.AUTH.AUTH',
        //     icon: 'icon-person',
        //     type: 'dropdown',
        //     priority: 1.1,
        //     children: [{
        //         name: 'MENU.AUTH.LOGIN',
        //         state: 'authentication.login',
        //         type: 'link'
        //     },{
        //         name: 'MENU.AUTH.SIGN_UP',
        //         state: 'authentication.signup',
        //         type: 'link'
        //     },{
        //         name: 'MENU.AUTH.FORGOT',
        //         state: 'authentication.forgot',
        //         type: 'link'
        //     },{
        //         name: 'MENU.AUTH.LOCK',
        //         state: 'authentication.lock',
        //         type: 'link'
        //     },{
        //         name: 'MENU.AUTH.PROFILE',
        //         state: 'triangular.admin-default.profile',
        //         type: 'link'
        //     }]
        // });
    }
})();