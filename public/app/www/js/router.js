angular.module('app.controllers', [])

.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: "www/html/index.html",
    controller: 'IndexCtrl'
  })
  .when('/contact', {
    templateUrl: "www/html/contact.html",
    controller: 'ContactCtrl'
  })
  .when('/projects', {
    templateUrl: "www/html/projects.html",
    controller: 'ProjectsCtrl'
  })
  .when('/project/:id', {
    templateUrl: "www/html/project.html",
    controller: 'ProjectCtrl'
  })
  .when('/admin', {
    templateUrl: "www/html/admin.html",
    controller: 'AdminCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $routeProvider.otherwise({redirectTo: '/'});
});
