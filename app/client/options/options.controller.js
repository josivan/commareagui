(function() {
  'use strict';

  OptionsController.$inject = ['OptionsService'];

  function OptionsController(OptionsService) {

    let data = {
    }

    let _selectJavaExe = () => {
      let path = OptionsService.getSelectedFile('java.exe', 'exe');
      if (path) {
        this.data.javaPath = path[0];
      }
      else {
        delete this.data['javaPath'];
      }
    }

    let _selectCastor = () => {
      let path = OptionsService.getSelectedFile('castor-1.0.jar', 'jar');
      if (path) {
        this.data.castor = path[0];
      }
      else {
        delete this.data['castor'];
      }
    }

    let _selectLogging = () => {
      let path = OptionsService.getSelectedFile('commons-logging.jar', 'jar');
      if (path) {
        this.data.logging = path[0];
      }
      else {
        delete this.data['logging'];
      }
    }

    let _selectXerces = () => {
      let path = OptionsService.getSelectedFile('xercesImpl-2.4.0.jar', 'jar');
      if (path) {
        this.data.xerces = path[0];
      }
      else {
        delete this.data['xerces'];
      }
    }

    let _cancel = () => {
      this.close();
    }

    let _save = () => {
      OptionsService.writeGlobalOptions(this.data)
        .then(() => {
          console.log('teste no then');
          this.close()
        })
        .catch();
    }

    let _init = () => {
      this.data = OptionsService.loadGlobalOptions();
    }

    angular.extend(this, {
      $onInit: _init,
      cancel: _cancel,
      data: data,
      save: _save,
      selectCastor: _selectCastor,
      selectLogging: _selectLogging,
      selectJavaExe: _selectJavaExe,
      selectXerces: _selectXerces
    });
  }

  angular
    .module('commarea.options')
    .controller('OptionsController', OptionsController);

})();
