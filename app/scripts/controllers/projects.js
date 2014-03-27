'use strict';

angular.module('sfolioApp')
  .controller('ProjectsCtrl', function ($scope, $http, $modal, $log, Behance) {

    $scope.loading = true;
    $scope.projects = Behance.getProjects().then(function (data) {
      console.log(data);
      $scope.projects = data.projects;
      $scope.loading = false;
    }, function (error) {
      $scope.projects = [];
      $scope.loading = false;
    });

  });
