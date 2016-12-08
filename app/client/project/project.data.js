(function() {
  'use strict';

  ProjectDataService.$inject = [];
  function ProjectDataService() {

    var data = {
      project: {}
    };

    var getData = () => {
      return this.data;
    }

    var setData = (newData) => {
      angular.copy(newData, this.data);
    }

    var getRequestFields = () => {
      if (!this.data.requestFields) {
        this.data.requestFields = [];
      }

      return this.data.requestFields;
    }

    var getResponseFields = () => {
      if (!this.data.responseFields) {
        this.data.responseFields = [];
      }

      return this.data.responseFields;
    }

    var reset = () => {
      this.data = {
        project: {}
      };
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