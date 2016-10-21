(function() {
  'use strict';

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
  
    var homeState = {
      name: 'app.home',
      url: '/home',
      component: 'home'
    }

    console.log('montou home');
    $stateProvider.state(homeState);
  }

  angular
    .module('commarea.home', [])
    .config(Config);

})();