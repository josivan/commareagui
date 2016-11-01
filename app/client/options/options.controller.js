(function() {
  'use strict';

  OptionsController.$inject = [];

  function OptionsController() {

    let data = {
    }

    let selectJavaExe = () => {
      console.log('select java');
    }

    angular.extend(this, {
      data: data,
      selectJavaExe: selectJavaExe
    });
  }

  angular
    .module('commarea.options')
    .controller('OptionsController', OptionsController);

})();
