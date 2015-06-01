'use strict';

angular.module('app.contact', ['ngRoute', '$api'])



.controller('ContactCtrl', ['$api', function() {
  $api.contact.success(function(data) {
    $scope.contact = data;
  }).error(function(data) {
    $scope.contact = [{title : 'Error'}];
    });
}]);
