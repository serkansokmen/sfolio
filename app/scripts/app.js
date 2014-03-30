'use strict';

angular.module('sfolioApp', [
  'ngRoute',
  'ngCookies',
  'ngSanitize',
  'ui.bootstrap',
  'wu.masonry'
])
.config(function ($routeProvider, $httpProvider, $interpolateProvider, BEHANCE_CLIENT_ID) {

  // Route config
  $routeProvider
      .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'ProjectsCtrl'
    })
    .when('/projects/:id', {
      templateUrl: 'views/project.html',
      controller: 'ProjectCtrl'
    });
    // .otherwise({
    //   redirectTo: '/projects'
    // });

  // CORS configuration
  $httpProvider.defaults.useXDomain = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // Disable IE Ajax request caching
  $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';

  // Change default interpolation
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
})
.constant('BEHANCE_CLIENT_ID', 'udyhvT9z5DUw9qP7giwmusxfMEjTSTBm');
