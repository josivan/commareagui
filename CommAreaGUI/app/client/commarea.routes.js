angular
  .module('commarea.routes', [
    'ngRoute'
  ])
  .config(['$routeProvider', routes]);

function routes($routeProvider) {
  $routeProvider
    .when('/novo', {
      templateUrl: 'screens/project-edition.html'
    });
}