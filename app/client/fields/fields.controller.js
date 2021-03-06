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
        name: this.data.name,
        type: this.data.selectedType,
        nullable: this.data.nullable
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

    var addField = (form) => {
      if (_containsSameField()) {
        console.log('exibir erro');
      }
      else {
        let list = _list();
        let nType = _newType();
        nType.id = list.length; 
        list.push(nType);
        form.$setPristine();
      }
    }

    var _containsSameField = () => {
      return _list().some(e => e.name == this.data.name);
    }

    var _list = () => {
      return this.data.parameterOf == 'response'
        ? this.responseFields
        : this.requestFields;
    }

    var clickOnTab = (type) => {
      this.data.parameterOf = type;
    }

    var deleteField = (index) => {
      _list().splice(index, 1);
    }

    angular.extend(this, {
      $onInit: _init,
      addField: addField,
      clickOnTab: clickOnTab,
      data: data,
      dataTypes: dataTypes,
      deleteField: deleteField,
      projectName: data.project.name || '',
      requestFields: requestFields,
      responseFields: responseFields
    });
  }

  angular
    .module('commarea.fields')
    .controller('FieldsController', FieldsController);

})();