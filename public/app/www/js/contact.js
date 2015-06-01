'use strict';

angular.module('app.contact', ['ngRoute'])



.controller('ContactCtrl', ['app.apiFactory', function() {
  $api.contact.success(function(data) {
    $scope.contact = data;
  }).error(function(data) {
    $scope.contact = [{title : 'Error'}];
    });
}]);
