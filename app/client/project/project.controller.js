(function() {
  'use strict';

  angular
    .module('commarea.project')
    .controller('ProjectController', ProjectController);
  
  ProjectController.$inject = [
    'ProjectService'
  ];

  function ProjectController(ProjectService) {

  }
})();