'use strict';

const electron = require('electron');
const menu = require('./components/menu.app.js');
require('./components/events.app.js');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const Menu = electron.Menu;
//const Tray = electron.Tray;
//const globalShortcut = electron.globalShortcut;
const ipcMain = electron.ipcMain;

//const remote = electron.remote;

//const mainProcess = remote.require('main.js');

let window = null;

app.on('ready', () => {
  console.log('Hello from Electron');
  window = new BrowserWindow({
    heigth: 600,
    width: 800
  });
  window.setMenu(menu);
  window.loadURL(`file://${__dirname}/app/index.html`); 
  window.openDevTools();

  window.on('closed', () => {
    window = null;
  });
});

ipcMain.on('click-novo', (event, arg) => {
  console.log(arg);
  event.returnValue = 'Beleza';
});