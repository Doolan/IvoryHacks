angular.module('ChopChopApp')
    .directive('mainNavigation', function() {
        return {
            restrict: 'E',
            templateUrl: '../../views/nav.html'
        };
    }).directive('mainPage', function() {
        return {
            restrict: 'E',
            templateUrl: '../../views/main.html'
        };
    //}).directive('registration', function() {
    //    return {
    //        restrict: 'E',
    //        templateUrl: '../../views/registration.html'
    //    };
    }).directive('about', function() {
        return {
            restrict: 'E',
            templateUrl: '../../views/about.html'
        };
    }).directive('sponsors', function() {
        return {
            restrict: 'E',
            templateUrl: '../../views/sponsors.html'
        };
    //}).directive('account', function() {
    //    return {
    //        restrict: 'E',
    //        templateUrl: '../../views/account.html'
    //    };
    }).directive('challenges', function() {
        return {
            restrict: 'E',
            templateUrl: '../../views/challenges.html'
        };
    })
    .directive('map', function() {
        return {
            restrict: 'E',
            templateUrl: '../../views/map.html'
        };
    }).directive('schedule', function() {
        return {
            restrict: 'E',
            templateUrl: '../../views/schedule.html'
        };

    }).directive('faqs', function() {
        return {
            restrict: 'E',
            templateUrl: '../../views/faqs.html'
        };
    });

