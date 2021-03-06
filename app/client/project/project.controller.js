(function() {
  'use strict';

  ProjectController.$inject = [
    '$timeout',
    '$state',
    'ipcRenderer',
    'ProjectService',
    'ProjectDataService'
  ];

  function ProjectController($timeout, $state, ipcRenderer, ProjectService, ProjectDataService) {

    // public
    var data = ProjectDataService.getData();
    var hasMessage = false;
    var message = null;

    ipcRenderer.on('artifacts-generated', (event, result) => {
      $timeout(_artifactsGenerated(result));
    });

    var cancel = () => {
      ProjectDataService.reset();
      $state.go('app.home');
    }

    var save = () => { 
      this.message = {};
      let result = ipcRenderer.sendSync('save-project', this.data);
      this.hasMessage = true;
      angular.copy(result, this.message);
      this.data.action = 'Editar';
      this.data.editionMode = true;
    }

    var resetMessage = () => {
      this.hasMessage = false;
      this.message = null;
    }

    //private
    var _openProject = (file) => {
      let dataFromFile = ipcRenderer.sendSync('open-project', file);
      angular.copy(dataFromFile, this.data);
      this.data.editionMode = true;
      this.data.action = 'Editar';
    }

    var _new = () => {
      this.data.action = this.action;
    }

    var _init = () => {
      if (this.action == 'Editar') {
          _edit();
      }
      else if (this.action == 'Novo') {
        _new();
      }
    }

    var _edit = () => {
      _selectFile();
    }

    var _selectFile = () => {
      let file = ProjectService.getSelectedFile();

      if (file) {
        _openProject(file[0]);
      }
      else {
        cancel();
      }
    }

    var _artifactsGenerated = (result) => {
      console.log('gerou -> ', result);
      if (result.status == 'OK') {
        this.hasMessage = true;
        this.message = {
          type: 'success',
          text: `${result.artifact.name} gerado em ${result.artifact.path}.`
        }
      }
    }

    angular.extend(this, {
      $postLink: _init,
      cancel: cancel,
      data: data,
      hasMessage: hasMessage,
      message: message,
      resetMessage: resetMessage,
      save: save
    });
  }

  angular
    .module('commarea.project')
    .controller('ProjectController', ProjectController);

})();