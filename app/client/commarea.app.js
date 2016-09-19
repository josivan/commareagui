var app = angular
  .module('commarea', [
    'ui.bootstrap',
    'commarea.routes',
    'commarea.core',
    'commarea.services',
    'commarea.controllers'
  ]);

//app.run(init);

init.$inject = ['Menu', 'NavigationService'];

function init(Menu, NavigationService) {
  console.log('iniciando');

  const menu = [
    {
      label: '&Projeto',
      submenu: [
        {
          label: '&Novo',
          accelerator: 'CmdOrCtrl+N',
          click: NavigationService.novo
        },
        {
          label: '&Abrir',
          accelerator: 'CmdOrCtrl+A',
          //click: actions.actionOpen
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
          label: '&Opções'
        }
      ]
    }
  ];

  const appMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(appMenu);
  console.log('menu pronto');
}