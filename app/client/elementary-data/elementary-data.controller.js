(function() {
  'use strict';

  ElementaryDataController.$inject = [
    'ElementaryDataService'
  ];

  function ElementaryDataController(ElementaryDataService) {

    var selectPath = () => {
      let selectedPath = ElementaryDataService.getSelectedPath();
    
      if (selectedPath) {
        data.prjPath = selectedPath[0];
      }
      else {
        delete data["prjPath"];
      }
    }

    angular.extend(this, {
      selectPath: selectPath
    });
  }

  angular
    .module('commarea.elementarydata')
    .controller('ElementaryDataController', ElementaryDataController);

})();