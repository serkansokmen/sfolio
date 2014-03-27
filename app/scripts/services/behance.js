'use strict';

angular.module('sfolioApp')
  .factory('Behance', function (Restangular) {

    var _projectsService = Restangular.all('users/serkansokmen/projects');

    // Public API
    return {
      getProjects: function () {
        return _projectsService.getList();
      },
      getProject: function (id) {
        return _projectsService.one(id);
      }
    };
  });
