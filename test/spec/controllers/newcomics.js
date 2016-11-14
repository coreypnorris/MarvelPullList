'use strict';

describe('Controller: NewcomicsCtrl', function () {

  // load the controller's module
  beforeEach(module('marvelPullListApp'));

  var NewcomicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewcomicsCtrl = $controller('NewcomicsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
