exports.actionNew = (menuItem, browserWindow, event) => {
  console.log('Clicado em Novo no main');
  console.log('type', process.type);
  browserWindow.webContents.send('novo-no-fe', 'sendo chamado a partir do main');
}

exports.actionOpen = () => {
  console.log('Clicado em Abrir no main');
  console.log(process.type);
}

exports.actionExit = () => {
  console.log('vou sair');
}