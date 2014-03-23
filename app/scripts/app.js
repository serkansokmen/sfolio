'use strict';

angular.module('sfolioApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'restangular',
  'ui.bootstrap',
  'wu.masonry'
])
.config(function ($routeProvider, $httpProvider, $interpolateProvider, RestangularProvider) {

  // Route config
  $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  // CORS configuration
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // Disable IE Ajax request caching
  // $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';

  // Change default interpolation
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');

  // Restangular configuration
  RestangularProvider
    // Set base API endpoint
    .setBaseUrl('https://www.behance.net/v2')
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
