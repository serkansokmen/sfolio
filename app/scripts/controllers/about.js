'use strict';

angular.module('sfolioApp')
  .controller('AboutCtrl', function ($scope, $window, Behance) {
    $scope.loading = true;
    Behance.getUser('serkansokmen').then(function (user) {
      $scope.user = user;
      $scope.loading = false;
    }, function (error) {
      console.log(error);
      $scope.loading = false;
      $scope.user = null;
    });

    $scope.gotoUrl = function (url) {
      $window.location.href = url;
    };
  });
