'use strict';

angular.module('sfolioApp')
  .factory('Behance', function ($q, BEHANCE_CLIENT_ID) {

    // Scoped service properties
    var behance = be(BEHANCE_CLIENT_ID),
        projects = $q.defer();

    // Service methods
    var retrieveProjects = function() {
      var deferred = $q.defer();

      behance.user.projects('serkansokmen').then(function (response) {
        deferred.resolve(response);
      });

      return deferred.promise;
    };

    // Public API
    return {
      getProjects: retrieveProjects
    };
  });
