const {ipcMain} = require('electron');
const fh = require('./file-handler.app.js');

ipcMain.on('save-project', (event, arg) => {
  if (saveFile(arg)) {
    event.returnValue = 'Salvo com sucesso';
  }
  else {
    event.returnValue = 'Falhou ao salvar';
  }
});

ipcMain.on('save-project-async', (event, arg) => {
  event.sender.send('file-saved', {
    project: 'Projeto',
    caminho: 'assincrono'
  })
});

ipcMain.on('open-project', (event, arg) => {
  event.returnValue = fh.abrir(arg);
});

ipcMain.on('load-data-type', (event, arg) => {
  event.sender.send('loaded-data-type', fh.loadDataType());
});

var saveFile = (arg) => {
  fh.criar(arg); 
  return true;
}