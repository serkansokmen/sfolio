'use strict';

angular.module('sfolioApp')
  .factory('Behance', function ($q, BEHANCE_CLIENT_ID) {

    // Scoped service properties
    var behance = be(BEHANCE_CLIENT_ID),
        projects = $q.defer();

    // Service methods
    var retrieveProjects = function() {

      behance.user.projects('serkansokmen').then(function (response) {
        projects.resolve(response);
      });

      return projects.promise;
    };

    var getProject = function (id) {

      var project = $q.defer();

      behance.project(id).then(function (response) {
        project.resolve(response);
      });

      return project.promise;
    };

    // Public API
    return {
      getProjects: retrieveProjects,
      getProject: getProject
    };
  });
