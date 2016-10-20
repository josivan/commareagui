(function() {
  'use strict';

  angular
    .module('commarea', [
      'ui.router',
      'commarea.home'
    ])
    .config(Config);

  Config.$inject = ['$urlRouterProvider', '$stateProvider'];

  function Config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    var appState = {
      name: 'app',
      url: '/',
      component: 'app'
    };

    $stateProvider.state(appState);
  }

})();