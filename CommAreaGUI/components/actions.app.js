const electron = require('electron'); 
const ipcRenderer = electron.ipcRenderer;

exports.actionNew = () => {
  console.log('Clicado em Novo');

  /*
  if (process.type == 'renderer') {
    console.log(ipcRenderer.sendSync('click-novo', 'Cliquei no botão novo...' ));
  }
  */
}

exports.actionOpen = () => {
  console.log('Clicado em Abrir');
}

exports.actionExit = () => {
  console.log('vou sair');
}