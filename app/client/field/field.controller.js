(function() {
  'use strict';

  angular
    .module('commarea.field')
    .controller('FieldController', FieldController);

  FieldController.$inject = [
    'ipcRenderer',
    'ProjectService'
  ];

  function FieldController(ipcRenderer, ProjectService) {
    
    var projectName = ProjectService.getData()['prjName'];
    var data = {};
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
      let _nType = _newType();

      if (data.parameterOf == 'response') {
        responseFields.push(_nType);
      }
      else {
        requestFields.push(_nType);
      }
    }

    var deleteField = (index) => {
      console.log('deletando', index);
      //fields.splice(index, 1);
    }

    var clickOnTab = (index) => {
      console.log('clickOnTab', index);
    }

    angular.extend(this, {
      addType: addType,
      clickOnTab: clickOnTab,
      data: data,
      dataTypes: dataTypes,
      deleteField: deleteField,
      projectName: projectName,
      requestFields: requestFields,
      responseFields: responseFields
    });
  }
})();