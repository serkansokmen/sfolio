'use strict';

angular.module('sfolioApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, $sce, Behance) {

    $scope.project = Behance.getProject($routeParams.id)
      .then(function (project) {
        $scope.project = project;
      }, function (error) {
        console.log(error);
        $scope.project = {};
      });

    $scope.getModuleEmbed = function (src) {
      return $sce.trustAsHtml(src);
    };

  });
