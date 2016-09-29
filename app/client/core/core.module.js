(function() {
  'use strict';

  angular
    .module('commarea.core', [
      'ngRoute',
      'commarea.home'
    ])
    .config(Routes);
  
  Routes.$inject = ['$routeProvider']; 

  function Routes($routeProvider) {
    $routeProvider
      .when('/welcome', {
        templateUrl: 'screens/welcome.html',
        controller: 'HomeController as hc'
      })
      /*.when('/novo', {
        templateUrl: 'screens/project-edition.html',
        controller: 'ProjectController as pc'
      })
      .when('/fields', {
        templateUrl: 'screens/fields-edition.html',
        controller: 'FieldController as fc'
      })*/
      .otherwise({
        redirectTo: '/welcome'
      });
    }
})();