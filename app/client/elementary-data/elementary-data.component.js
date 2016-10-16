(function() {
  'use strict';

  ElementaryDataController.$inject = [
    'ElementaryDataService'
  ];

  function ElementaryDataController(ElementaryDataService) {
    var data = {};

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
      data: data,
      selectPath: selectPath
    });
  }

  angular
    .module('commarea.elementarydata')
    .component('elementaryData', {
      templateUrl: 'client/elementary-data/elementary-data.template.html',
      controller: ElementaryDataController
    });
})();