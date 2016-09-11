angular
  .module('commarea.services', [])
  .service('EventsServices', EventsServices)
  .service('NavigationService', NavigationService)
  .service('ProjectService', ProjectService);

EventsServices.$inject = ['ipcRenderer'];
function EventsServices(ipcRenderer) {

  ipcRenderer.on('file-saved', (event, arg) => {
    console.log('voltou da assincrona');
    console.log(arg);
  });
}

NavigationService.$inject = ['$location'];
function NavigationService($location) {
  return {
    novo : () => {
      console.log('novo em NavigationService');
      $location.path('novo');
    }
  };
}

function ProjectService() {
  var _data = {};

  this.getData = () => {
    return _data;
  };

  this.setData = (data) => {
    _data = data;
  }
}