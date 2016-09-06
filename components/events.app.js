const {ipcMain} = require('electron');
const fu = require('./filecreator.app.js');

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
  console.log('abrindo no main');
  event.returnValue = {
    name: 'Projeto',
    caminho: 'Algum lugar'
  };
});

var saveFile = (arg) => {
  console.log('vou gerar um arquivo');
  console.log(arg);
  fu.criar(arg); 
  return true;
}