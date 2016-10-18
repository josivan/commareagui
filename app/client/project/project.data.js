(function() {
  'use strict';

  ProjectDataService.$inject = [];
  function ProjectDataService() {

    var data = {};

    var getData = () => {
      return this.data;
    }

    var setData = (newData) => {
      angular.copy(newData, this.data);
    }

    var getRequestFields = () => {
      return this.data.requestFields;
    }

    var getResponseFields = () => {
      return this.data.responseFields;
    }

    var reset = () => {
      this.data = {};
    }

    angular.extend(ProjectDataService.prototype, {
      data: data,
      getData: getData,
      getRequestFields: getRequestFields,
      getResponseFields: getResponseFields,
      reset: reset,
      setData: setData
    });
  }

  angular
    .module('commarea.project')
    .service('ProjectDataService', ProjectDataService);

})();