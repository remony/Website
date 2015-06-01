angular.module('app.apiFactory')
.factory('$api', ['$q', '$http'], function($q, $http) {
  return{
    contact: function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var token = window.localStorage['user_token'];

      //login to api
      $http.get("api/contact")
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
        //$scope.libary = data;
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No contact?');
      });

      promise.success = function(fn)  {
        promise.then(fn);
        return promise;
      }

      promise.error = function(fn)  {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }
});
