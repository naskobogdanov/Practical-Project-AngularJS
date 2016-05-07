'use strict';

angular.module('issueTracker.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'app/dashboard/dashboard.html',
    controller: 'Dashboard'
  });
}])

.controller('Dashdoard', [function() {

}]);