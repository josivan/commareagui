const {ipcMain} = require('electron');

ipcMain.on('save-project', (event, arg) => {
  console.log('salvando no main');
  event.returnValue = 'Salvo com sucesso';
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