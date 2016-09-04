const electron = require('electron'); 
const ipcRenderer = electron.ipcRenderer;

var actionNew = function() {
  console.log('Clicado em Novo');
  console.log(ipcRenderer.sendSync('click-novo', 'Cliquei no botão novo...' ));
}

var actionOpen = function() {
  console.log('Clicado em Abrir');
}

var actionExit = function() {
  console.log('vou sair');
}

const actions =  {
  actionNew: actionNew,
  actionOpen: actionOpen
}

module.exports = actions;