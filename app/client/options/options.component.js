(function() {
  'use strict';

  let OptionsComponent = {
    templateUrl: 'client/options/options.template.html',
    controller: 'OptionsController'
  }

  angular
    .module('commarea.options')
    .component('options', OptionsComponent);

})();
