(function() {
  'use strict';

  angular
    .module('commarea.elementarydata')
    .component('elementaryData', {
      templateUrl: 'client/elementary-data/elementary-data.template.html',
      controller: 'ElementaryDataController',
      bindings: {
        data: '='
      }
    });
})();