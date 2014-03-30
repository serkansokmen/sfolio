'use strict';

angular.module('sfolioApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, $sce, Behance) {

    $scope.loading = true;
    $scope.project = Behance.getProject($routeParams.id)
      .then(function (project) {
        $scope.project = project;
        $scope.loading = false;
      }, function (error) {
        console.log(error);
        $scope.loading = false;
        $scope.project = null;
      });

    $scope.getModuleEmbed = function (src) {
      return $sce.trustAsHtml(src);
    };

  });
