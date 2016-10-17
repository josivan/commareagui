(function() {
  'use strict';

  FieldsController.$inject = [
    'ipcRenderer',
    'ProjectDataService'
  ];
  
  function FieldsController(ipcRenderer, ProjectDataService) { 
    var data = ProjectDataService.getData();
    var requestFields = ProjectDataService.getRequestFields();
    var responseFields = ProjectDataService.getResponseFields();
    var dataTypes = [];

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
        nullable: data.nullable
      };

      _resetType();

      return result;
    }

    var _resetType = () => {
      delete data['name'];
      delete data['selectedType'];
      delete data['nullable'];
    }

    var _init = () => {
      data.parameterOf = 'request';

      ipcRenderer.on('loaded-data-type', (event, arg) => {
        _extractDataType(arg);
      });
      ipcRenderer.send('load-data-type');
    }

    var addType = (form) => {
      let list = _list();
      let nType = _newType();
      nType.id = list.length; 
      list.push(nType);
      form.$setPristine();
    }

    var _list = () => {
      return data.parameterOf == 'response'
        ? responseFields
        : requestFields;
    }

    var clickOnTab = (type) => {
      data.parameterOf = type;
    }

    var deleteField = (index) => {
      _list().splice(index, 1);
    }

    angular.extend(this, {
      $onInit: _init,
      addType: addType,
      clickOnTab: clickOnTab,
      data: data,
      dataTypes: dataTypes,
      deleteField: deleteField,
      projectName: data['prjName'],
      requestFields: requestFields,
      responseFields: responseFields
    });
  }

  angular
    .module('commarea.fields')
    .controller('FieldsController', FieldsController);

})();