(function() {
  'use strict';

  angular
    .module('commarea.project')
    .controller('ProjectController', ProjectController);
  
  ProjectController.$inject = [
    '$location',
    '$routeParams',
    'ipcRenderer',
    'ProjectService'
  ];

  function ProjectController($location, $routeParams, ipcRenderer, ProjectService) {
    
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
      var selectedPath = ProjectService.getSelectedPath();
    
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
        ProjectService.setData(data);
    }

    var _init = () => {
      var action = $routeParams.action; 
      data = {
        action: action
      }
      
      if (action == 'Editar') {
        _selectFile();
      }

      ProjectService.setData(data);
    }

    var _selectFile = () => {
      var file = ProjectService.getSelectedFile();

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
  }
})();