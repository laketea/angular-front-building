(function() {
    'use strict';

    angular.module('app')
        .config(routeConfig);

    function routeConfig($routeProvider) {

        $routeProvider.otherwise({  
            redirectTo: '/home'  
        });  
    }

})();
