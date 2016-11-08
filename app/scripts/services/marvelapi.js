'use strict';

/**
 * @ngdoc service
 * @name marvelPullListApp.marvelApi
 * @description
 * # marvelApi
 * Service in the marvelPullListApp.
 */
angular.module('marvelPullListApp')
  .service('marvelApi', ['md5', '$http', function (md5, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getApiKeys : function() {
        return $http({
            url: 'env.json', 
            method: 'GET'
          }).success(function(data){
            return data;
          })
          .error(function(error){
            return error;
          });
      }
    }
  }]);