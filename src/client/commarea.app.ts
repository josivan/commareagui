/// <reference path="../../typings/angularjs/angular.d.ts" />
import { UpgradeAdapter } from '@angular/upgrade';

var adapter = new UpgradeAdapter();

/*
(function() {
  'use strict';

  angular
    .module('commarea', [
      'ui.bootstrap',
      'ngConfirm',
      'commarea.core'
    ]);
})();
*/
var app = angular.module('commarea', []);

adapter.bootstrap(document.body, ['commarea']); 