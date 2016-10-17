(function() {
  'use strict';

  angular
    .module('commarea.home')
    .component('home', {
      templateUrl: 'client/home/home.html',
      controller: 'HomeController',
      bindings: { $router: '<' }
    });
})();