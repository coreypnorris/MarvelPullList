'use strict';

/**
 * @ngdoc overview
 * @name marvelPullListApp
 * @description
 * # marvelPullListApp
 *
 * Main module of the application.
 */
angular
  .module('marvelPullListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
