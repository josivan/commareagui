(function() {
  'use strict';

  AppController.$inject = ['$state'];

  function AppController($state) {

    var _postLink = () => {
      $state.go('app.home');
    }

    angular.extend(this, {
      $postLink: _postLink
    });
  }

  angular
    .module('commarea')
    .controller('AppController', AppController);
})();