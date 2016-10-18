/* Copied from http://stackoverflow.com/questions/16388562/angularjs-force-uppercase-in-textbox */
(function() {
  'use strict';

  function Capitalize() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        var capitalize = (inputValue) => {
          if (inputValue == undefined) inputValue = '';
          var capitalized = inputValue.toUpperCase();
          if (capitalized !== inputValue) {
            modelCtrl.$setViewValue(capitalized);
            modelCtrl.$render();
          }
          return capitalized;
        }
        modelCtrl.$parsers.push(capitalize);
        capitalize(scope[attrs.ngModel]); // capitalize initial value
      }
    }
  }

  angular
    .module('commarea.components')
    .directive('capitalize', Capitalize);
})();