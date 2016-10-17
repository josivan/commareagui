(function() {
  'use strict';

  angular
    .module('commarea.project')
    .component('project', {
      templateUrl: 'client/project/project-form.template.html',
      controller: 'ProjectController',
      bindings: { 
        $router: '<'
      }
    });
})();