(function() {
  'use strict';

  ElementaryDataController.$inject = [
    'ElementaryDataService',
    'ProjectDataService'
  ];

  function ElementaryDataController(ElementaryDataService, ProjectDataService) {
    var data = ProjectDataService.getData();

    var selectPath = () => {
      let selectedPath = ElementaryDataService.getSelectedPath();
    
      if (selectedPath) {
        data.project.path = selectedPath[0];
      }
      else {
        delete data.project["path"];
      }
    }

    angular.extend(this, {
      data: data, 
      selectPath: selectPath
    });
  }

  angular
    .module('commarea.elementarydata')
    .controller('ElementaryDataController', ElementaryDataController);

})();