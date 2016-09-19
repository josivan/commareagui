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
      controller: 'ProjectController as pc'
    })
    .when('/fields', {
      templateUrl: 'screens/fields-edition.html',
      controller: 'FieldController as fc'
    })
    .otherwise({
      redirectTo: '/welcome'
    });
}