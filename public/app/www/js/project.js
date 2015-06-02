'use strict';

angular.module('app.project', ['ngRoute'])



.controller('ProjectCtrl', ['$api', '$scope', '$routeParams', function($api, $scope, $routeParams ) {
  var id = $routeParams.id;
  $api.project(id).then(function(data) {
    //console.log(data);
    $scope.project = data.projects[0];

    //$scope.contact = data;
  }, function(data) {
    $scope.contact = [{title : 'Error'}];
    });
}]);
