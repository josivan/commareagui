(function() {
  'use strict';

  angular
    .module('commarea.field')
    .controller('FieldController', FieldController);

  FieldController.$inject = [
    '$location',
    'ipcRenderer',
    'ProjectService'
  ];

  function FieldController($location, ipcRenderer, ProjectService) {
    
    var projectName = ProjectService.getData()['prjName'];
    var data = {
      parameterOf: 'request'
    };
    var dataTypes = [];
    var requestFields = [];
    var responseFields = [];

    var _extractDataType = (arg) => {
      let availableTypes = arg['valores'].split(',');

      availableTypes.forEach((element, index) => {
        dataTypes[index] = {
          nome: arg[element + '.nome'],
          map: arg[element + '.map']
        };
      });
    };

    var _newType = () => {
      let result = {
        name: data.name,
        type: data.selectedType,
        nullable: data.nullable,
      };

      _resetType();

      return result;
    };

    var _resetType = () => {
      delete data['name'];
      delete data['selectedType'];
      delete data['nullable'];
    }

    var _init = () => {
      ipcRenderer.on('loaded-data-type', (event, arg) => {
        _extractDataType(arg);
      });
      ipcRenderer.send('load-data-type');
    }

    _init();

    var addType = () => {
      _list().push( _newType());
    }

    var _list = () => {
      return data.parameterOf == 'response'
        ? responseFields
        : requestFields;
    }

    var deleteField = (index) => {
      _list().splice(index, 1);
    }

    var clickOnTab = (index) => {
      data.parameterOf = index;
    }

    var save = () => {
      let data = ProjectService.getData();
      data.requestFields = requestFields;
      data.responseFields = responseFields;
      $location.path('project/fields');
    }

    angular.extend(this, {
      addType: addType,
      clickOnTab: clickOnTab,
      data: data,
      dataTypes: dataTypes,
      deleteField: deleteField,
      projectName: projectName,
      requestFields: requestFields,
      responseFields: responseFields,
      save: save
    });
  }
})();