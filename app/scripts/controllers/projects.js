'use strict';

angular.module('sfolioApp')
  .controller('ProjectsCtrl', function ($scope, Behance) {

    $scope.loading = true;
    $scope.pageNum = 1;

    $scope.loadProjects = function (pageNum) {
      Behance.getProjects({
        page:pageNum
      }).then(function (projects) {
          $scope.projects = projects;
          $scope.loading = false;
        }, function (error) {
          $scope.projects = null;
          $scope.loading = false;
        });
    };
    $scope.loadProjects();

  });
