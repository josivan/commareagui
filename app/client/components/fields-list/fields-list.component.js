(function() {
  'use strict';

  angular
    .module('commarea.components')
    .component('fieldsList', {
      templateUrl: 'client/components/fields-list/fields-list.component.html', 
      bindings: {
        filterType: '@',
        list: '=',
        onDelete: '&'
      }
    });
})();