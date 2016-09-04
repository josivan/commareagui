const electron = require('electron');
const ev = require('./events.app.js');

const template = [
  {
    label: '&Projeto',
    submenu: [
      {
        label: '&Novo',
        accelerator: 'CmdOrCtrl+N'
      },
      {
        label: '&Abrir',
        accelerator: 'CmdOrCtrl+A',
        click: ev.actionOpen
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
    label: '&Ferramentas'
  }
];

const menu = electron.Menu.buildFromTemplate(template);
module.exports = menu;