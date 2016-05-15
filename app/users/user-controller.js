'use strict';

angular.module('issueTracker.user', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'app/users/login.html',
            controller: 'UserController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'app/users/register.html',
            controller: 'UserController'
        });
    }])

    .controller('UserController', ['$scope', function($scope) {
        $scope.login = function (user) {
            console.log(user);
        };

        $scope.register = function (user) {
            console.log(user);
        };
    }]);