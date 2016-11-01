(function() {
  'use strict';

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
  
    var homeState = {
      name: 'app.home',
      url: '/home',
      component: 'home'
    }

    $stateProvider.state(homeState);
  }

  angular
    .module('commarea.home', [
      'commarea.project',
      'commarea.options'
    ])
    .config(Config);

})();
