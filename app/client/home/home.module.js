(function() {
  'use strict';

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
  
    var homeState = {
      url: '/home',
      component: 'home'
    }

    $stateProvider.state('home', homeState);
  }

  angular
    .module('commarea.home', [
      'angular-electron'
    ])
    .config(Config);

})();