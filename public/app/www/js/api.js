angular.module('app.apiFactory', [])

.factory('$api', ['$q', '$http', function($q, $http) {
  return{
    home: function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
         url: "/api",
         method: 'GET',
         dataType: 'json',
         data: '',
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
    },
    contact: function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
         url: "/api/contact",
         method: 'GET',
         dataType: 'json',
         data: '',
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
    },
    projects: function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
         url: "/api/projects",
         method: 'GET',
         dataType: 'json',
         data: '',
         headers: {
             'Content-Type': 'application/json; charset=utf-8'
         }
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No projects?');
      });
      return promise;
    },
    project: function(id) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
         url: "/api/project/"+ id,
         method: 'GET',
         dataType: 'json',
         data: '',
         headers: {
             'Content-Type': 'application/json; charset=utf-8'
         }
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No projects?');
      });
      return promise;
    },
    featuredProjects: function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
         url: "/api/featuredProjects",
         method: 'GET',
         dataType: 'json',
         data: '',
         headers: {
             'Content-Type': 'application/json; charset=utf-8'
         }
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No projects?');
      });
      return promise;
    },
    githubRepos: function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
         url: "https://api.github.com/users/remony/repos",
         method: 'GET',
         dataType: 'json',
         data: '',
         headers: {
             'Content-Type': 'application/json; charset=utf-8'
         }
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No projects?');
      });
      return promise;
    },
    login: function(userName, passWord) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
          url: '/api/login',
          method: 'POST',
          dataType: 'json',
          data: JSON.stringify({
            username : userName,
            pass : passWord
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }

        })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No projects?');
      });
      return promise;
    },
    updateContact: function(contact) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api
      console.log(contact);
      $http({
          url: '/api/contact',
          method: 'POST',
          dataType: 'json',
          data: {contact},
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }

        })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No projects?');
      });
      return promise;
    },

    addProject: function(project) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      //login to api

      $http({
          url: '/api/project',
          method: 'POST',
          dataType: 'json',
          data: {project},
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }

        })
      .success(function(data, status, headers, config) {
        console.log("success");
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config) {
        deferred.reject('No projects?');
      });
      return promise;
    }





  }}]);
