/**
 * @ngdoc function
 * @name OrganizationsTableController
 * @module nossAppContacts
 * @kind function
 *
 * @description
 *
 * Controller for the table in Organizations page
 */
(function () {
    'use strict';


    angular
        .module('app.contents.contacts')
        .controller('OrganizationsTableController', Controller);

    /* @ngInject */
    function Controller($scope, Restangular, $mdDialog, $q) {
        var organizations = Restangular.all('contents/contacts/organizations');

        var vm = this;
        vm.query = {
            filter: '',
            page_size: '10',
            sort: 'name',
            page: 1
        };
        vm.selected = [];
        vm.filter = {
            options: {
                debounce: 500
            }
        };
        vm.getOrgs = getOrgs;
        vm.removeFilter = removeFilter;
        vm.deleteSelected = deleteSelected;

        activate();

        ////////////////

        function activate() {
            var bookmark;
            $scope.$watch('vm.query.filter', function (newValue, oldValue) {
                if (!oldValue) {
                    bookmark = vm.query.page;
                }

                if (newValue !== oldValue) {
                    vm.query.page = 1;
                    vm.getOrgs();
                }

                if (!newValue) {
                    vm.query.page = bookmark;
                }


            });
        }

        function getOrgs() {
            vm.promise = organizations.getList(vm.query).then(function (orgs) {
                vm.orgs = orgs;
            });
        }

        function removeFilter() {
            vm.filter.show = false;
            vm.query.filter = '';

            if (vm.filter.form.$dirty) {
                vm.filter.form.$setPristine();
            }
        }

        function deleteSelected(event) {
            var items = vm.selected;
            var promise = showDeleteDialogs(event, items);
            promise.finally(function () {
                getOrgs();
            });
        }

        function showDeleteDialogs(event, items, position) {
            if (!position) {
                position = 0;
            }
            return $mdDialog.show({
                clickOutsideToClose: true,
                controller: 'OrganizationsDeleteController',
                controllerAs: 'ctrl',
                targetEvent: event,
                locals: {
                    item: items[position]
                },
                bindToController: true,
                templateUrl: 'app/contents/contacts/organization-delete-dialog.tmpl.html'
            }).then(function () {
                position++;
                if (position < items.length) {
                    return showDeleteDialogs(event, items, position);
                }
            })
        }
    }
})();