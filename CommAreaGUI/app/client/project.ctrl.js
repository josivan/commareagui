angular
  .module('commarea.core')
  .controller('ProjectController', ProjectController);

ProjectController.$inject = [
  '$location',
  'ipcRenderer',
  'EventsServices'
];

function ProjectController($location, ipcRenderer, EventsServices) {
  var vm = this;

  vm.newProject = () => {
    console.log('novo projeto no controller');
    $location.path('/novo');
  };

  vm.openProject = () => {
    console.log('Abrir projeto no controller');
    //var result = ipcRenderer.sendSync('open-project');
    //console.log(result);
    vm.newProject();
  };

  vm.cancel = () => {
    console.log('fechando...');
    $location.path('/');
  };

  vm.save = () => {
    console.log('salvando...');
  };

  ipcRenderer.on('novo-no-fe', (event, arg) => {
    console.log(arg);
    console.log('vou fazer algo no fe depois de clicar no novo via menu', 'dentro do controllador de projeto');
    vm.newProject();
  });
}