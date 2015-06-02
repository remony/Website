'use strict';

angular.module('app.admin', ['ngRoute'])



.controller('AdminCtrl', ['$api', '$scope', function($api, $scope) {

  $scope.project = {};

  $scope.login = function() {
    $api.login($scope.login.username, $scope.login.password).then(function(data)  {
      $scope.loggedin = true;
    }, function(data) {
      $scope.loggedin = false;
    });
  }

  $scope.updateContact = function() {
    console.log("changing");
    $api.updateContact($scope.contact).then(function(data)  {
      $api.contact().then(function(data) {
        //console.log(data);
        $scope.contact = data;
        //$scope.input
      }, function(data) {
        $scope.contact = [{title : 'Error'}];
        });
    }, function(data) {
      $scope.loggedin = false;
    });
  }

  $scope.addProject = function()  {
    $api.addProject($scope.project).then(function(data) {

    }, function(data) {

    });
  }

  $api.contact().then(function(data) {
    console.log(data);
    $scope.contact = data;
    //$scope.input
  }, function(data) {
    $scope.contact = [{title : 'Error'}];
    });
}]);
