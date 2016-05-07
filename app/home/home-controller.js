angular.module('issueTracker.home', [])
    .config(['routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'app/home/home.html',
            controller : 'HomeController'
        })
    }])
    .controller('HomeController', ['$scope', function($scope){
        $scope.hello = 'Zdrasti';
    }]);