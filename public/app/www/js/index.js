'use strict';

angular.module('app.index', ['ngRoute', 'app.apiFactory'])


.controller('IndexCtrl', ['$api', '$scope', function($api, $scope) {
  $api.contact().then(function(data) {
    console.log(data);
    $scope.contact = data;
  }, function(data) {
    $scope.contact = [{title : 'Error'}];
    });


    $api.featuredProjects().then(function(data) {
      console.log(data);
      $scope.projects = data.projects;

      //$scope.contact = data;
    }, function(data) {
      $scope.contact = [{title : 'Error'}];
      });

}]);
