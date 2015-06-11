(function() {
    'use strict';

    angular.module("about")
        .directive("tb", tb);

    function tb() {
        return {
            restrict: 'A',
            templateUrl: '<div></div>',
            compile: function(element, attributes) {
                return function(scope, element, attributes) {

                }
            }
        };
    }

})();
