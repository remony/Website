'use strict';

angular.module('app.projects', ['ngRoute'])



.controller('ProjectsCtrl', ['$api', '$scope', function($api, $scope) {
  $api.projects().then(function(data) {
    console.log(data);
    $scope.objects = data.projects;
    $scope.obj2 = [];
    while ($scope.objects.length) {
        $scope.obj2.push($scope.objects.splice(0, 2))
    }
    //$scope.contact = data;
  }, function(data) {
    $scope.contact = [{title : 'Error'}];
    });

    $api.githubRepos().then(function(data) {
      console.log(data);
      $scope.github = data;
      //$scope.contact = data;
    }, function(data) {
      $scope.github = [{title : 'Error'}];
      });
}]);
