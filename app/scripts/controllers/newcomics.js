'use strict';

/**
 * @ngdoc function
 * @name marvelPullListApp.controller:NewcomicsCtrl
 * @description
 * # NewcomicsCtrl
 * Controller of the marvelPullListApp
 */
angular.module('marvelPullListApp')
  .controller('NewcomicsCtrl', ['$scope', 'marvelApi', function ($scope, marvelApi) {
    $scope.getMyCtrlScope = function() {
      return $scope;   
    };

    var apiKeys, credentials;
    marvelApi.getApiKeys().then(function(response){
      apiKeys = response.data;
      credentials = marvelApi.getCredentials(apiKeys.MARVEL_PUBLIC_KEY, apiKeys.MARVEL_PRIVATE_KEY);
      marvelApi.getThisWeeksComics(credentials.publicKey, credentials.hash, credentials.timeStamp)
        .success(function(response){
          $scope.newComics = response.data.results;
          console.log(response.data.results);
        });
    });
  }]);
