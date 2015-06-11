(function() {
    'use strict';

    angular.module("app", ['pascalprecht.translate', 'home', 'about'])
        .config(function($httpProvider) {
            $httpProvider.interceptors.push(requestHttpInterceptor);
        });

    function requestHttpInterceptor() {
        var tag = ''; //@@TAG

        return {
            'request': function(config) {
                if (!endsWith(config.url, '.html') && tag) {
                    config.url += '?v=' + tag;
                }
                return config;
            }
        }
    }

    function endsWith(str, suffix) {
        return String.prototype.endsWith ? str.endsWith(suffix) : str.indexOf(suffix, str.length - suffix.length) !== -1;;
    }


})();
