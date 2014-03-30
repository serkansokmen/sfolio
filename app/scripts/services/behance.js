'use strict';

angular.module('sfolioApp')
  .factory('Behance', function ($http, $q, BEHANCE_CLIENT_ID) {

    // Public API
    return {
      // Get a list of projects
      getProjects: function () {

        var _projects = $q.defer();

        $http.jsonp('https://www.behance.net/v2/users/serkansokmen/projects', {
          params: {
            'client_id': BEHANCE_CLIENT_ID,
            'callback': 'JSON_CALLBACK'
          },
          cache: true
        }).success(function (data){
          _projects.resolve(data.projects);
        });

        return _projects.promise;
      },

      // Get project with id
      getProject: function (id) {

        var _project = $q.defer();

        $http.jsonp('https://www.behance.net/v2/projects/' + id, {
          params: {
            'client_id': BEHANCE_CLIENT_ID,
            'callback': 'JSON_CALLBACK'
          },
          cache: true
        }).success(function (data){
          _project.resolve(data.project);
        });

        return _project.promise;
      },

      // Get project with id
      getUser: function (username) {

        var _user = $q.defer();

        $http.jsonp('https://www.behance.net/v2/users/' + username, {
          params: {
            'client_id': BEHANCE_CLIENT_ID,
            'callback': 'JSON_CALLBACK'
          },
          cache: true
        }).success(function (data){
          _user.resolve(data.user);
        });

        return _user.promise;
      }
    };
  });
