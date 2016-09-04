angular
  .module('commarea.routes', [
    'ngRoute'
  ])
  .config(['$routeProvider', routes]);

function routes($routeProvider) {
  $routeProvider
    .when('/welcome', {
      templateUrl: 'screens/welcome.html'
    })
    .when('/novo', {
      templateUrl: 'screens/project-edition.html',
      controller: 'ProjectController',
      controllerAs: 'project'
    })
    .otherwise({
      redirectTo: '/welcome'
    });
}