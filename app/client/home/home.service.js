(function() {
  'use strict';

  angular
    .module('commarea.home')
    .service('HomeService', HomeService);

  HomeService.$inject = [
    '$timeout', 
    '$uibModal',
    'ipcRenderer'
  ];

  function HomeService($timeout, $uibModal, ipcRenderer) {
    ipcRenderer.on('show-options', () => {
      console.log('opções no serviço');
      this.showOptions();
    });

    this.showOptions = () => {
      console.log('exibir opções');
    }
  }

})();
