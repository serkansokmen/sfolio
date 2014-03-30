'use strict';

angular.module('sfolioApp')
  .directive('loadingIcon', function () {
    return {
      template: '<div ng-show="loading" style="height: 120px;">' +
        '<i class="fa fa-spinner fa-spin" style="font-size:36px;"></i>' +
      '</div>',
      restrict: 'E'
    };
  });
