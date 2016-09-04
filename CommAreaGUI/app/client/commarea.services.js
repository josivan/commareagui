angular
  .module('commarea.services', [])
  .service('EventsServices', EventsServices);

EventsServices.$inject = ['ipcRenderer'];
function EventsServices(ipcRenderer) {

  ipcRenderer.on('file-saved', (event, arg) => {
    console.log('voltou da assincrona');
    console.log(arg);
  });

}