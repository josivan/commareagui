(function() {
  'use strict';

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
  
    var homeState = {
      name: 'home',
      url: '/home',
      component: 'home'
    }

    $stateProvider.state(homeState);
  }

  angular
    .module('commarea.home', [
      'angular-electron'
    ])
    .config(Config);

})();