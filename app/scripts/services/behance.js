'use strict';

angular.module('sfolioApp')
  .factory('Behance', function ($http, $q, localStorageService, BEHANCE_CLIENT_ID) {

    // Should be called to refresh data (for testing purposes)
    // localStorageService.clearAll();

    // Public API
    return {

      // Get a list of projects
      getProjects: function (config) {
        console.log(config);
        var pageNum = 1;
        if (angular.isObject(config) && angular.isDefined(config.page)) {
          pageNum = config.page;
        }

        var _projects = $q.defer(),
            _storedProjects = localStorageService.get('Projects_Page_' + pageNum);

        if (_storedProjects !== null) {
          _projects.resolve(_storedProjects);
        } else {
          $http.jsonp('https://www.behance.net/v2/users/serkansokmen/projects', {
            params: {
              'client_id': BEHANCE_CLIENT_ID,
              'callback': 'JSON_CALLBACK',
              'page': pageNum
            }
          })
          .then(function (response) {
            if (response.data.http_code === 200 && response.data.projects.length > 0) {
              // console.log('getting page', _page);
              _projects.resolve(response.data.projects);
              localStorageService.add('Projects_Page_' + pageNum, response.data.projects);
            }
          });
        }

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
