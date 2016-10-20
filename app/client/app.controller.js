(function() {
  'use strict';

  AppController.$inject = ['$state'];

  function AppController($state) {
    
    var _goHome = () => {
      console.log('iniciando a app');
      console.log('$state', $state);
      $state.go('home');
    }

    angular.extend(this, {
      $postLink: _goHome 
    });
  }

  angular
    .module('commarea')
    .controller('AppController', AppController);

})();