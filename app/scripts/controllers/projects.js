'use strict';

angular.module('sfolioApp')
  .controller('ProjectsCtrl', function ($scope, $location, $routeParams, Behance) {

    $scope.pageNum = angular.isDefined($routeParams.page) ? $routeParams.page : 1;

    $scope.loading = true;

    Behance.getProjects({
      'page': $scope.pageNum
    })
    .then(function (projects) {
      $scope.projects = projects;
      $scope.loading = false;
    });

    $scope.$watch('pageNum', function (newVal, oldVal) {
      $location.url('/projects?page=' + newVal);
    });
  });
