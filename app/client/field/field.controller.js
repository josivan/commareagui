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
    var fields = [];

    var _extractDataType = (arg) => {
      let availableTypes = arg['valores'].split(',');

      availableTypes.forEach((element, index) => {
        dataTypes[index] = {
          nome: arg[element + '.nome'],
          map: arg[element + '.map']
        };
      });
    };

    var addType = () => {
      fields.push(_newType());
    }

    var deleteField = (index) => {
      fields.splice(index, 1);
    }

    var _newType = () => {
      let result = {
        name: data.name,
        type: data.selectedType,
        nullable: data.nullable
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

    angular.extend(this, {
      addType: addType,
      data: data,
      dataTypes: dataTypes,
      deleteField: deleteField,
      projectName: projectName,
      fields: fields
    });
  }
})();