'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('sfolioApp'));

  var ProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsCtrl = $controller('ProjectsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of projects to the scope', function () {
    //expect(scope.projects.length).toBe(3);
  });
});
