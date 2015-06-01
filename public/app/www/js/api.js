angular.module('app.apiFactory', [])

.factory('$api', ['$q', '$http', function($q, $http) {
  return{
    contact: function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
         url: "/api/contact",
         method: 'POST',
         dataType: 'json',
         data: JSON.stringify(authInfo),
         headers: {
             'Content-Type': 'application/json; charset=utf-8'
         }
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No contact?');
      });
      return promise;
    }
  }}]);
