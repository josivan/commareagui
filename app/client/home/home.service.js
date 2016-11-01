(function() {
  'use strict';

  angular
    .module('commarea.home')
    .service('HomeService', HomeService);

  HomeService.$inject = [
    '$timeout', 
    '$state',
    '$uibModal',
    'ipcRenderer'
  ];

  function HomeService($timeout, $state, $uibModal, ipcRenderer) {

    ipcRenderer.on('show-options', () => {
      this.showOptions();
    });

    this.showOptions = () => {
      
      let dialogDefinitions = {
        backdrop: 'static',
        component: 'options'
      }

      $uibModal.open(dialogDefinitions);
    }
  }

})();
