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

  // if none of the above states are matched, use this as the fallback
  $routeProvider.otherwise({redirectTo: '/'});
});
;
