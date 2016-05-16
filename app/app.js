'use strict';

// Declare app level module which depends on views, and components
angular.module('issueTracker', [
    'ngRoute',
    'issueTracker.home',
    'issueTracker.user',
    'issueTracker.projects'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '#/'});
  }])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/');
