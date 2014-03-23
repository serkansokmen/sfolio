'use strict';

angular.module('sfolioApp')
  .controller('MainCtrl', function ($scope, Behance) {

    $scope.projects = Behance.getProjects().then(function (data) {
      $scope.projects = data.projects;
    }, function (error) {
      $scope.projects = [];
    });

  });
