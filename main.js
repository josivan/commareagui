'use strict';

const electron = require('electron');
const menu = require('./components/menu.app.js');
require('./components/events.app.js');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let window = null;

app.on('ready', () => {
  window = new BrowserWindow({
    heigth: 600,
    width: 800,
    center: true
  });
  window.setMenu(menu);
  window.loadURL(`file://${__dirname}/app/index.html`); 
  window.openDevTools();

  /*
  window.on('page-title-updated', (event, title) => {
    event.preventDefault();
  });
  */

  window.on('closed', () => {
    window = null;
  });
});