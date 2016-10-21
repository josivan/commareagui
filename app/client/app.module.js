(function() {
  'use strict';

  angular
    .module('commarea', [
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

    console.log('montou app');
    $stateProvider.state(appState);
  }

})();