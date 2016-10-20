(function() {
  'use strict';

  var appComponent = {
    templateUrl: 'client/app.template.html',
    controller: 'AppController'
  }
  
  angular
    .module('commarea')
    .component('app', appComponent);

})();