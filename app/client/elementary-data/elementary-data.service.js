(function() {
  'use strict';

  ElementaryDataService.$inject = ['dialog', 'BrowserWindow', 'path'];

  function ElementaryDataService(dialog, BrowserWindow, path) {
    this.getSelectedPath = () => {
      return dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), 
        {
          title: 'Selecionar um caminho',
          defaultPath: path.resolve('/'),
          properties: [
            'openDirectory'
          ]
        });
    }
  }

  angular
    .module('commarea.elementarydata')
    .service('ElementaryDataService', ElementaryDataService);

})();