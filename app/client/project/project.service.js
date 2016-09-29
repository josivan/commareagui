(function() {
  'use strict';

  angular
    .module('commarea.project')
    .service('ProjectService', ProjectService);

  ProjectService.$inject = ['dialog', 'BrowserWindow'];

  function ProjectService(dialog, BrowserWindow) {
    var _data = {};

    this.getData = () => {
      return _data;
    };

    this.setData = (data) => {
      _data = data;
    }

    this.getSelectedFile = () => {
      return dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), 
        {
          title: 'Abrir um Projeto Existente',
          defaultPath: './',
          properties: [
            'openFile'
          ],
          filters: [{
            name: 'Projetos Comm Area',
            extensions: ['caproject']
          }]
        });
    }
  }
})();