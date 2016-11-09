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
      },
      getCredentials : function(publicKey, privateKey) {
        var timeStamp = Date.now();
        var hash = md5.createHash(publicKey + privateKey + timeStamp);
        return {publicKey: publicKey, privateKey : privateKey, timeStamp : timeStamp, hash: hash}
      }
      // getThisWeeksComics : function(publicKey, privateKey, timeStamp){
      //   var hash = md5.createHash(publicKey + privateKey + timeStamp);
      //   var queryParams = '?dateDescriptor=thisWeek&format=comic&limit=100&noVariants=true' + '&apikey=' + publicKey + '&hash=' + hash + '&ts=' + timeStamp;        
      //   return $http({
      //       url: 'http://gateway.marvel.com/v1/public/comics' + queryParams, 
      //       method: "GET"
      //     }).success(function(data){
      //       return data;
      //     })
      //     .error(function(error){
      //       return error;
      //     });
      // }
    }
  }]);