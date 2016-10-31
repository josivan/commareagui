(function() {
  'use strict';

  HomeController.$inject = [
    '$timeout', 
    '$state',
    'ipcRenderer',
    'HomeService'
  ];

  function HomeController($timeout, $state, ipcRenderer, HomeService) {
    //private
    ipcRenderer.on('new-project', () => {
      $timeout(newProject());
    });
    ipcRenderer.on('open-project', () => {
      $timeout(openProject());
    });

    //public
    var newProject = () => {
      $state.go('app.project', {action: 'Novo'});
    }

    var openProject = () => {
      $state.go('app.project', {action: 'Editar'});
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