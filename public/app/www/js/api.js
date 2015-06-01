angular.module('app.apiFactory', [])
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
      return promise;
    }
  }
});
