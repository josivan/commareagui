const electron = require('electron');
const actions = require('./actions.app.js');

const template = [
  {
    label: '&Projeto',
    submenu: [
      {
        label: '&Novo',
        accelerator: 'CmdOrCtrl+N',
        click: actions.actionNew
      },
      {
        label: '&Abrir',
        accelerator: 'CmdOrCtrl+A',
        click: actions.actionOpen
      },
      {
        type: 'separator'
      },
      {
        label: '&Sair',
        role: 'quit',
        accelerator: 'Alt+F4'
      }
    ]
  },
  {
    label: '&Ferramentas',
    submenu: [
      {
        label: '&Opções',
        accelerator: 'CmdOrCtrl+O',
        click: actions.actionOptions
      }
    ]
  }
];

const menu = electron.Menu.buildFromTemplate(template);
module.exports = menu;