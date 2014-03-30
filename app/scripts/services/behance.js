'use strict';

angular.module('sfolioApp')
  .factory('Behance', function ($http, $q, Restangular, BEHANCE_CLIENT_ID) {

    var _projects = $q.defer(),
        _project = $q.defer();

    // Public API
    return {
      // Get a list of projects
      getProjects: function () {

        $http.jsonp('https://www.behance.net/v2/users/serkansokmen/projects', {
          params: {
            'client_id': BEHANCE_CLIENT_ID,
            'callback': 'JSON_CALLBACK'
          }
        }).success(function (data){
          _projects.resolve(data.projects);
        });

        return _projects.promise;
      },

      // Get project with id
      getProject: function (id) {

        $http.jsonp('https://www.behance.net/v2/projects/' + id, {
          params: {
            'client_id': BEHANCE_CLIENT_ID,
            'callback': 'JSON_CALLBACK'
          }
        }).success(function (data){
          _project.resolve(data.project);
        });

        return _project.promise;
      }
    };
  });
