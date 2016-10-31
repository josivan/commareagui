var actionNew = (menuItem, browserWindow, event) => {
  browserWindow.webContents.send('new-project');
}

var actionOpen = (menuItem, browserWindow, event) => {
  browserWindow.webContents.send('open-project');
}

var actionOptions = (menuItem, browserWindow, event) => {
  browserWindow.webContents.send('show-options');
}

module.exports = {
  actionNew: actionNew,
  actionOpen: actionOpen,
  actionOptions: actionOptions
}