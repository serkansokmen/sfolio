'use strict';

angular.module('sfolioApp', [
  'ngRoute',
  'ngCookies',
  'ngSanitize',
  'restangular',
  'ui.bootstrap',
  'wu.masonry'
])
.config(function ($routeProvider, $httpProvider, $interpolateProvider, RestangularProvider, BEHANCE_CLIENT_ID) {

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
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // Disable IE Ajax request caching
  $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';

  // Change default interpolation
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');

  // Restangular configuration
  RestangularProvider
    // Set base API endpoint
    .setBaseUrl('https://www.behance.net/v2')
    .setDefaultHttpFields({cache: true})
    .setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'})
    .setDefaultRequestParams({client_id: BEHANCE_CLIENT_ID, callback: 'callbackFunction'})
    .setResponseExtractor(function(response, operation) {
      console.log(response);
      return response.results;
    })
    // Django Rest Framework returns result in an array named 'results'
    // so we dig it
    .setResponseInterceptor(function (data, operation, what) {
      if (operation === 'getList') {
        var list = data['results'];
        list.metadata = data.metadata;
        return list;
      }
      return data;
    })
    // stop the promise chain on error
    .setErrorInterceptor(function (resp) {
      console.log(resp.status);
      return false;
    });
})
.constant('BEHANCE_CLIENT_ID', 'udyhvT9z5DUw9qP7giwmusxfMEjTSTBm');
