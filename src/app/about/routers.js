(function() {
    'use strict';

    angular.module('about')
        .config(routeConfig);

    function routeConfig($routeProvider) {

        $routeProvider.when('/about/', {
            controller: 'aboutController',
            controllerAs: 'vm',
            templateUrl: 'app/about/templates/about.tpl.html'
        });
    }

})();
