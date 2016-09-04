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
    console.log('Novo projeto no controller');
    var result = ipcRenderer.sendSync('save-project');
    console.log(result);
    ipcRenderer.send('save-project-async', 'chamada assincrona');
    //$location.path('novo');
  };

  vm.openProject = () => {
    console.log('Abrir projeto no controller');
    var result = ipcRenderer.sendSync('open-project');
    console.log(result);
  }
}