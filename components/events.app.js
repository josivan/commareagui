const { ipcMain } = require('electron');
const fh = require('./file-handler.app');
const ag = require('./artifacts-generator.app');

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
  let result = {
    status: 'OK',
    artifacts: [
      {
        name: 'arquivo 1',
        path: 'no caminho 1'
      }
    ]
  };

  ag.generate(arg);
  event.sender.send('artifacts-generated', result);
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