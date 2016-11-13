(function() {
  'use strict';

  OptionsController.$inject = [];

  function OptionsController() {

    let data = {
    }

    let selectJavaExe = () => {
      console.log('select java');
    }

    let cancel = () => {
      console.log('cancel');
      close();
    }

    let save = () => {
      console.log('save');
    }

    angular.extend(this, {
      cancel: cancel,
      data: data,
      save: save,
      selectJavaExe: selectJavaExe
    });
  }

  angular
    .module('commarea.options')
    .controller('OptionsController', OptionsController);

})();
