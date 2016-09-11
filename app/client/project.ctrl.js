angular
  .module('commarea.core')
  .controller('ProjectController', ProjectController);

ProjectController.$inject = [
  '$location',
  '$timeout',
  'ipcRenderer',
  'BrowserWindow',
  'dialog',
  'ProjectService'
];

function ProjectController($location, $timeout, ipcRenderer, BrowserWindow, dialog, ProjectService) {
  var vm = this;

  vm.data = ProjectService.getData();

  vm.newProject = () => {
    vm.data.action = 'Novo';
    ProjectService.setData(vm.data);
    $location.path('novo');
  };

  vm.openProject = () => {
    var fileToOpen = dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), 
      {
        title: 'Abrir um Projeto Existente',
        defaultPath: '.',
        properties: [
          'openFile'
        ],
        filters: [{
          name: 'Projetos Comm Area',
          extensions: ['caproject']
        }]
      });
      var result = ipcRenderer.sendSync('open-project', fileToOpen[0]);
      vm.data = result;
      vm.data.action = 'Editar';
      ProjectService.setData(vm.data);
      $location.path('/novo');
  };

  vm.cancel = () => {
    $location.path('/');
  };

  vm.save = () => {
    var result = ipcRenderer.sendSync('save-project', vm.data);
    vm.cancel();
  };

  ipcRenderer.on('new-project', (event, arg) => {
    $timeout(vm.newProject());
  });

  ipcRenderer.on('open-project', (event, arg) => {
    $timeout(vm.openProject());
  });
}