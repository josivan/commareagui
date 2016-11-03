(function() {
  'use strict';

  angular
    .module('commarea.home')
    .service('HomeService', HomeService);

  HomeService.$inject = [
    '$uibModal',
    'ipcRenderer'
  ];

  function HomeService($uibModal, ipcRenderer) {

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
