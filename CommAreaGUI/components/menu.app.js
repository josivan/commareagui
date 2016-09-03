const  electron = require('electron');

const template = [
  {
    label: 'Projeto',
    submenu: [
      {
        label: 'Novo'
      },
      {
        label: 'Abrir'
      }
    ]
  },
  {
    label: 'Ferramentas'
  }
];

const menu = electron.Menu.buildFromTemplate(template);
module.exports = menu;