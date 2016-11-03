(function() {
  'use strict';

  angular
    .module('commarea', [
      'ngAnimate',
      'ui.router',
      'ui.router.components',
      'angular-electron',
      'commarea.home'
    ])
    .config(Config);

  Config.$inject = ['$urlRouterProvider', '$stateProvider'];

  function Config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    var appState = {
      name: 'app',
      url: '/',
      views: {
        'app@': {
          component: 'app'
        }
      }
    }

    $stateProvider.state(appState);
  }

})();