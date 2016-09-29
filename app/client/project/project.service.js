(function() {
  'use strict';

  angular
    .module('commarea.project')
    .service('ProjectService', ProjectService);

  function ProjectService() {
    var _data = {};

    this.getData = () => {
      return _data;
    };

    this.setData = (data) => {
      _data = data;
    }
  }    
})();