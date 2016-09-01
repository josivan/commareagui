'use strict';

const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const Menu = electron.Menu;
//const Tray = electron.Tray;
//const globalShortcut = electron.globalShortcut;
//const ipcMain = electron.ipcMain;

const remote = electron.remote;

//const mainProcess = remote.require('main.js');

let window = null;

app.on('ready', () => {
  console.log('Hello from Electron');
  window = new BrowserWindow({
    heigth: 600,
    width: 800
  });
  window.loadURL(`file://${__dirname}/index.html`); 
});