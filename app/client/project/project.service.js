(function() {
  'use strict';

  angular
    .module('commarea.project')
    .service('ProjectService', ProjectService);

  ProjectService.$inject = ['dialog', 'BrowserWindow', 'path'];

  function ProjectService(dialog, BrowserWindow, path) {
    var _data = {};

    this.getData = () => {
      return _data;
    }

    this.setData = (data) => {
      _data = data;
    }

    this.getRequestFields = () => {
      return _data.requestFields;
    }

    this.getResponseFields = () => {
      return _data.responseFields;
    }

    this.getSelectedFile = () => {
      return dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), 
        {
          title: 'Abrir um Projeto Existente',
          defaultPath: path.resolve('./'),
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