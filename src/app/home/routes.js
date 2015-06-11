(function() {
    'use strict';

    angular.module('home')
        .config(routeConfig);

    function routeConfig($routeProvider) {

        $routeProvider.when('/home/', {
            controller: 'homeController',
            controllerAs: 'vm',
            templateUrl: 'app/home/templates/home.tpl.html'
        });
    }

})();
