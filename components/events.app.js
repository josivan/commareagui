const {ipcMain} = require('electron');
const fh = require('./file-handler.app.js');

ipcMain.on('save-project', (event, arg) => {
  console.log('salvando no main');
  console.log(arg);
  if (saveFile(arg)) {
    event.returnValue = 'Salvo com sucesso';
  }
  else {
    event.returnValue = 'Falhou ao salvar';
  }
});

ipcMain.on('save-project-async', (event, arg) => {
  console.log(arg);
  event.sender.send('file-saved', {
    project: 'Projeto',
    caminho: 'assincrono'
  })
});

ipcMain.on('open-project', (event, arg) => {
  event.returnValue = fh.abrir(arg);
});

var saveFile = (arg) => {
  console.log(arg);
  fh.criar(arg); 
  return true;
}