(function() {
  'use strict';

  angular
    .module('commarea.options')
    .service('OptionsService', OptionsService);

  OptionsService.$inject = ['dialog', 'BrowserWindow', 'path', 'ipcRenderer'];

  function OptionsService(dialog, BrowserWindow, path, ipcRenderer) {

    this.getSelectedFile = (fileType, extension) => {

      return dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), 
        {
          title: 'Selecionar Arquivo ' + fileType,
          defaultPath: path.resolve('./'),
          properties: [
            'openFile'
          ],
          filters: [{
            name: 'Arquivo ' + fileType,
            extensions: [extension]
          }]
        });
    }

    this.writeGlobalOptions = (data) => {
      ipcRenderer.sendSync('save-global-options', data);
    }

    this.loadGlobalOptions = () => {
      return ipcRenderer.sendSync('load-global-options');
    }
  }

})();
