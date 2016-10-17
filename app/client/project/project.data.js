(function() {
  'use strict';

  ProjectDataService.$inject = [];
  function ProjectDataService() {

    var data = {};

    var getData = () => {
      return data;
    }

    var setData = (newData) => {
      angular.copy(newData, data);
    }

    var getRequestFields = () => {
      return data.requestFields;
    }

    var getResponseFields = () => {
      return data.responseFields;
    }


    angular.extend(ProjectDataService.prototype, {
      getData: getData,
      getRequestFields: getRequestFields,
      getResponseFields: getResponseFields,
      setData: setData
    });
  }

  angular
    .module('commarea.project')
    .service('ProjectDataService', ProjectDataService);

})();