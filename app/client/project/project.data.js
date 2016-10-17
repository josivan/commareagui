(function() {
  'use strict';

  ProjectDataService.$inject = [];
  function ProjectDataService() {

    var _data = {};

    var _getData = () => {
      return _data;
    }

    var _setData = (newData) => {
      angular.copy(newData, _data);
    }

    angular.extend(ProjectDataService.prototype, {
      getData: _getData,
      setData: _setData
    });
  }

  angular
    .module('commarea.project')
    .service('ProjectDataService', ProjectDataService);

})();