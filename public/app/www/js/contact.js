'use strict';

angular.module('app.contact', ['ngRoute'])



.controller('ContactCtrl', ['$api', '$scope', function($api, $scope) {
  $api.contact().then(function(data) {
    console.log(data);
    $scope.contact = data;
  }, function(data) {
    $scope.contact = [{title : 'Error'}];
    });
}]);
