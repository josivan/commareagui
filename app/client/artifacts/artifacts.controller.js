(function() {
  'use strict';

  ArtifactsController.$inject = [
    'ipcRenderer',
    'ProjectDataService'
  ];

  function ArtifactsController(ipcRenderer, ProjectDataService) {
    var data = ProjectDataService.getData();

    var generate = () => {
      ipcRenderer.send('generate-artifacts', this.data);
    }

    var changed = (option) => {
      if (option.startsWith('xsd'))
        _checkConditionFromXSD(); 
      else
        _checkConditionFromJava();
    }

    var _checkConditionFromJava = () => {
      if (this.data.artifacts.javaRequest == true)
        this.data.artifacts.xsdRequest = true;

      if (this.data.artifacts.javaResponse == true)
        this.data.artifacts.xsdResponse = true;
    }

    var _checkConditionFromXSD = () => {
      if (this.data.artifacts.xsdRequest == false)
        this.data.artifacts.javaRequest = false;

      if (this.data.artifacts.xsdResponse == false)
        this.data.artifacts.javaResponse = false;
    }

    angular.extend(this, {
      changed: changed,
      data: data,
      generate: generate
    });
  }

  angular
    .module('commarea.artifacts')
    .controller('ArtifactsController', ArtifactsController);
})();