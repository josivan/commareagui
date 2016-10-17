(function() {
  'use strict';

  /*
  ProjectController.$inject = [
    '$location',
    '$routeParams',
    'ipcRenderer',
    'ProjectService'
  ];
  */

  function ProjectController() { // $location, $routeParams, ipcRenderer, ProjectService) {

    var cancel = () => {
      this.$router.navigate(['Home']);
    }

    var save = () => {
      console.log('salvar projeto');
    }
    /*
    //public
    var data = ProjectService.getData();

    var cancel = () => {
      $location.path('/');
    }

    var save = () => {
      ipcRenderer.sendSync('save-project', data);
      data.action = 'Editar';
      data.editionMode = true;
    }

    var selectPath = () => {
      let selectedPath = ProjectService.getSelectedPath();
    
      if (selectedPath) {
        data.prjPath = selectedPath[0];
      }
      else {
        delete data["prjPath"];
      }
    }

    //private
    var _openProject = (file) => {
        data = ipcRenderer.sendSync('open-project', file);
        data.editionMode = true;
        data.action = 'Editar';
        ProjectService.setData(data);
    }

    var _init = () => {
      var action = $routeParams.action;

      if (action == 'Editar') {
          _edit();
      }
      else if (action == 'Novo') {
          _new(action);
      }

      ProjectService.setData(data);
    }

    var _new = (action) => {
      data = {
        action: action
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

    _init();

    angular.extend(this, {
      data: data,
      cancel: cancel,
      selectPath: selectPath,
      save: save
    });
    */

    angular.extend(this, {
      cancel: cancel,
      save: save
    });
  }

  angular
    .module('commarea.project')
    .controller('ProjectController', ProjectController);
})();