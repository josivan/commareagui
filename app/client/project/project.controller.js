(function() {
  'use strict';

  ProjectController.$inject = [
    'ipcRenderer',
    'ProjectService',
    'ProjectDataService'
  ];

  function ProjectController(ipcRenderer, ProjectService, ProjectDataService) {

    // public
    var data = ProjectDataService.getData();
    var hasMessage = false;
    var message = null;

    var cancel = () => {
      this.$router.navigate(['Home']);
    }

    function save() {
      message = {};
      let result = ipcRenderer.sendSync('save-project', data);
      hasMessage = true;
      angular.copy(result, message);
      data.action = 'Editar';
      data.editionMode = true;
    }

    var resetMessage = () => {
      console.log('resetting message...', message);
      hasMessage = false;
      message = null;
    }

    //private
    var _openProject = (file) => {
      let dataFromFile = ipcRenderer.sendSync('open-project', file);
      angular.copy(dataFromFile, data);
      data.editionMode = true;
      data.action = 'Editar';
    }

    var _new = (action) => {
      data.action = action;
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