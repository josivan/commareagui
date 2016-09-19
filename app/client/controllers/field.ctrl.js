angular
  .module('commarea.controllers')
  .controller('FieldController', FieldController);

FieldController.$inject = [
  'ipcRenderer',
  'ProjectService'
];

function FieldController(ipcRenderer, ProjectService) {
  var vm = this;
  vm.projectName = ProjectService.getData()['prjName'];
  vm.data = {}; 
  vm.dataTypes = [];
  vm.types = [];

  vm.extractDataType = (arg) => {
    var types = arg['valores'].split(',');

    types.forEach((element, index) => {
      vm.dataTypes[index] = {
        nome: arg[element + '.nome'],
        map: arg[element + '.map']
      };
    });
  };

  vm.addType = () => {
    console.log('adicionar');
  };

  ipcRenderer.on('loaded-data-type', (event, arg) => {
    vm.extractDataType(arg);
  });

  ipcRenderer.send('load-data-type');
}