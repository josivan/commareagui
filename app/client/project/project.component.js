(function() {
  'use strict';

  var ProjectComponent = {
    templateUrl: 'client/project/project-form.template.html',
    controller: 'ProjectController',
    bindings: {
      action: '<'
    }
  }

  angular
    .module('commarea.project')
    .component('project', ProjectComponent);
})();