/*
(function() {
  'use strict';
  
  angular
    .module('commarea.home')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', '$timeout', 'ipcRenderer'];

    function HomeController($location, $timeout, ipcRenderer) {
      //private
      ipcRenderer.on('new-project', () => {
        $timeout(newProject());
      });
      ipcRenderer.on('open-project', () => {
        $timeout(openProject());
      });

      //public
      function newProject() {
        $location.path('project/Novo');
      }

      function openProject() {
        $location.path('project/Editar');
      }

      angular.extend(this, {
        newProject: newProject,
        openProject: openProject
      });
    }
})();
*/
/*
export class HomeController {
  constructor(location: $location) {

  }
}

HomeController.$inject = ['$location'];
*/