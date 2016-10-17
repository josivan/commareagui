(function() {
  'use strict';

  angular
    .module('commarea')
    .value('$routerRootComponent', 'app')
    .component('app', {
      template: '<ng-outlet></ng-outlet>',
      $routeConfig: [
        {
          path: '/home',
          name: 'Home',
          component: 'home',
          useAsDefault: true
        },
        {
          path: '/project/:action',
          name: 'Project',
          component: 'project'
        }
      ]
    });
})();