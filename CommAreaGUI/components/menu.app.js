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
      },
      {
        type: 'separator'
      },
      {
        label: 'Sair'
      }
    ]
  },
  {
    label: 'Ferramentas'
  }
];

const menu = electron.Menu.buildFromTemplate(template);
module.exports = menu;