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
    vm.types.push(vm._newType());
  };

  vm._newType = () => {
    var result = {
      name: vm.data.name,
      type: vm.data.selectedType,
      nullable: vm.data.nullable
    };

    vm._resetType();

    return result;
  };

  vm._resetType = () => {
    delete vm.data['name'];
    delete vm.data['selectedType'];
    delete vm.data['nullable'];
  }

  vm.delete = (index) => {
    vm.types.slice(index, 1);
  }

  ipcRenderer.on('loaded-data-type', (event, arg) => {
    vm.extractDataType(arg);
  });

  ipcRenderer.send('load-data-type');
}