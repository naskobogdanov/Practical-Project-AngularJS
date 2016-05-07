'use strict';

angular.module('issueTracker.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'app/projects/projects.html',
    controller: 'Projects'
  });
}])

.controller('Projects', [function() {

}]);