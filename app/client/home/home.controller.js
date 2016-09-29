(function() {
  'use strict';
  angular
    .module('commarea.home')
    .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
      var vm = angular.extend(this, {
        newProject: newProject,
        openProject: openProject
      });

      function newProject() {
        console.log('new');
      }

      function openProject() {
        console.log('open');
      }
    }
})();