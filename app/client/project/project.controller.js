(function() {
  'use strict';

  ProjectController.$inject = [
    '$timeout',
    'ipcRenderer',
    'ProjectService',
    'ProjectDataService'
  ];

  function ProjectController($timeout, ipcRenderer, ProjectService, ProjectDataService) {

    // public
    var data = ProjectDataService.getData();
    var hasMessage = false;
    var message = null;

    ipcRenderer.on('artifacts-generated', (event, result) => {
      $timeout(_artifactsGenerated(result));
    });

    var cancel = () => {
      ProjectDataService.reset();
      this.$router.navigate(['Home']);
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

    var _new = (action) => {
      this.data.action = action;
    }

    var _init = (next, previous) => {
      let action = next.params.action;
     
      if (action == 'Editar') {
          _edit();
      }
      else if (action == 'Novo') {
        _new(action);
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
        var msg = 'Foram gerados os seguintes artefatos:\n';
        result.artifacts.map(o => {
          msg += `- ${o.name} no caminho ${o.path}.\n`;
        });
        this.hasMessage = true;
        this.message
      }
    }

    angular.extend(this, {
      $routerOnActivate: _init,
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