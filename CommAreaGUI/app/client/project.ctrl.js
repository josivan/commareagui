angular
  .module('commarea.core')
  .controller('ProjectController', ProjectController);

ProjectController.$inject = [
  '$location',
  '$timeout',
  'ipcRenderer',
  'EventsServices'
];

function ProjectController($location, $timeout, ipcRenderer, EventsServices) {
  var vm = this;

  vm.data = {};

  vm.newProject = () => {
    console.log('novo projeto no controller');
    $location.path('/novo');
  };

  vm.openProject = () => {
    console.log('Abrir projeto no controller');
    //var result = ipcRenderer.sendSync('open-project');
    //console.log(result);
  };

  vm.cancel = () => {
    console.log('fechando...');
    $location.path('/');
  };

  vm.save = () => {
    console.log('salvando...');
    var result = ipcRenderer.sendSync('save-project', vm.data);
    console.log(result);
  };

  ipcRenderer.on('novo-no-fe', (event, arg) => {
    console.log(arg);
    console.log('vou fazer algo no fe depois de clicar no novo via menu', 'dentro do controllador de projeto');
    $timeout(vm.newProject());
  });
}