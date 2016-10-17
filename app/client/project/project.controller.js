(function() {
  'use strict';

  ProjectController.$inject = [
    'ipcRenderer',
    'ProjectService',
    'ProjectDataService'
  ];

  function ProjectController(ipcRenderer, ProjectService, ProjectDataService) {

    // public
    var data = {};

    var cancel = () => {
      this.$router.navigate(['Home']);
    }

    var save = () => {
      // ipcRenderer.sendSync('save-project', data);
      data.action = 'Editar';
      data.editionMode = true;
    }

    var selectPath = () => {
      /*
      let selectedPath = ProjectService.getSelectedPath();
    
      if (selectedPath) {
        data.prjPath = selectedPath[0];
      }
      else {
        delete data["prjPath"];
      }
      */
    }

    /*
    //public
    var data = ProjectService.getData();
    */

    //private
    var _openProject = (file) => {
      let dataFromFile = ipcRenderer.sendSync('open-project', file);
      angular.copy(dataFromFile, data);
      data.editionMode = true;
      data.action = 'Editar';
      ProjectService.setData(data);
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

      ProjectDataService.setData(data);
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
      save: save,
      selectPath: selectPath
    });
  }

  angular
    .module('commarea.project')
    .controller('ProjectController', ProjectController);
})();