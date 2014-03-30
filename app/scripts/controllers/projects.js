'use strict';

angular.module('sfolioApp')
  .controller('ProjectsCtrl', function ($scope, $http, $modal, $log, Behance) {

    $scope.loading = true;
    $scope.projects = Behance.getProjects().then(function (projects) {
      $scope.projects = projects;
      $scope.loading = false;
    }, function (error) {
      console.log(error);
      $scope.projects = [];
      $scope.loading = false;
    });

  });
