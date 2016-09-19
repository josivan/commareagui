angular
  .module('commarea.controllers')
  .controller('ProjectController', ProjectController);

ProjectController.$inject = [
  '$location',
  '$timeout',
  'ipcRenderer',
  'BrowserWindow',
  'dialog',
  'path',
  'ProjectService'
];

function ProjectController($location, $timeout, ipcRenderer, BrowserWindow, dialog, path, ProjectService) {
  var vm = this;

  vm.data = ProjectService.getData();

  vm.newProject = () => {
    vm.data = {
      action: 'Novo'
    };
    ProjectService.setData(vm.data);
    $location.path('novo');
  }

  vm.openProject = () => {
    var fileToOpen = dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), 
      {
        title: 'Abrir um Projeto Existente',
        defaultPath: './',
        properties: [
          'openFile'
        ],
        filters: [{
          name: 'Projetos Comm Area',
          extensions: ['caproject']
        }]
      });

      if (fileToOpen) {
        vm.data = ipcRenderer.sendSync('open-project', fileToOpen[0]);
        vm.data.action = 'Editar';
        vm.data.editionMode = true;
        ProjectService.setData(vm.data);
        $location.path('/novo');
      }
  }

  vm.cancel = () => {
    $location.path('/');
  }

  vm.addFields = () => {
  }

  vm.save = () => {
    var result = ipcRenderer.sendSync('save-project', vm.data);
    vm.data.action = 'Editar';
    vm.data.editionMode = true;
  }

  vm.selectPath = () => {
    var selectedPath = dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), 
      {
        title: 'Selecionar um caminho',
        defaultPath: path.resolve('/'),
        properties: [
          'openDirectory'
        ]
      });
    
    if (selectedPath) {
      vm.data.prjPath = selectedPath[0];
    }
    else {
      delete vm.data["prjPath"];
    }
  }

  ipcRenderer.on('new-project', function(event, arg) {
    $timeout(vm.newProject());
  });

  ipcRenderer.on('open-project', function(event, arg) {
    $timeout(vm.openProject());
  });
}