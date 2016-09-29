(function() {
  'use strict';

  angular
    .module('commarea.core', [
      'ngRoute',
      'commarea.home',
      'commarea.project'
    ])
    .config(Routes);
  
  Routes.$inject = ['$routeProvider']; 

  function Routes($routeProvider) {
    $routeProvider
      .when('/welcome', {
        templateUrl: 'client/home/home.html',
        controller: 'HomeController as hc'
      })
      .when('/project/:action', {
        templateUrl: 'client/project/project-form.template.html',
        controller: 'ProjectController as pc'
      })
      .when('/fields', {
        templateUrl: 'client/field/field-form.template.html',
        controller: 'FieldController as fc'
      })
      .otherwise({
        redirectTo: '/welcome'
      });
    }
})();