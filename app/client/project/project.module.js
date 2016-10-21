(function() {
  'use strict';

  Config.$inject = [
    '$stateProvider'
  ];

  function Config($stateProvider) {
    
    var projectState = {
      name: 'app.project',
      url: '/project/:action',
      component: 'project',
      resolve: {
        action: ($stateParams) => { 
          return $stateParams.action; 
        }
      }
    }

    $stateProvider.state(projectState);
  }

  angular
    .module('commarea.project', [
      'ui.bootstrap',
      'commarea.elementarydata',
      'commarea.fields',
      'commarea.artifacts'
    ])
    .config(Config);

})();