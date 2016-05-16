'use strict';

angular.module('issueTracker.home', ['issueTracker.users.authentication'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/login', {
            templateUrl: 'app/home/login.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'app/home/register.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', ['$scope', 'authentication', function($scope, authentication) {
        $scope.hello = 'SoftUni Issue Tracker';
        $scope.login = function (user) {
            console.log(user);
            authentication.loginUser(user);
        };

        $scope.register = function (user) {
            authentication.registerUser(user);
        };

    }]);