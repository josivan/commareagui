const { ipcMain } = require('electron');
const fh = require('./file-handler.app');
const ag = require('./artifacts/artifacts-generator.app');

ipcMain.on('save-project', (event, arg) => {
  if (saveFile(arg)) {
    event.returnValue = {
      type: 'success',
      text: 'Salvo com sucesso'
    }
  }
  else {
    event.returnValue = {
      type: 'danger',
      text: 'Falha ao salvar'
    } 
  }
});

ipcMain.on('save-project-async', (event, arg) => {
  event.sender.send('file-saved', {
    project: 'Projeto',
    caminho: 'assincrono'
  })
});

ipcMain.on('generate-artifacts', (event, arg) => {
  ag.generate(event.sender, arg);
});

ipcMain.on('open-project', (event, arg) => {
  event.returnValue = fh.openProject(arg);
});

ipcMain.on('load-data-type', (event, arg) => {
  event.sender.send('loaded-data-type', fh.loadDataType());
});

ipcMain.on('load-global-options', (event) => {
  event.returnValue = fh.loadOptions();
});

ipcMain.on('save-global-options', (event, arg) => {
  fh.saveOptions(arg);
  event.returnValue = {
    type: 'success',
    text: 'Opções Globais foram Salvas'
  }
});

let saveFile = (arg) => {
  fh.createProject(arg); 
  return true;
}