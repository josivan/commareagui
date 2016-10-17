(function() {
  'use strict';

  HomeController.$inject = ['$timeout', 'ipcRenderer'];

  function HomeController($timeout, ipcRenderer) {
    //private
    ipcRenderer.on('new-project', () => {
      $timeout(newProject());
    });
    ipcRenderer.on('open-project', () => {
      $timeout(openProject());
    });

    //public
    function newProject() {
      this.$router.navigate(['Project', {action: 'Novo'}]);
    }

    function openProject() {
      this.$router.navigate(['Project', {action: 'Editar'}]);
    }

    angular.extend(this, {
      newProject: newProject,
      openProject: openProject
    });
  }
  angular
    .module('commarea.home')
    .controller('HomeController', HomeController);

})();