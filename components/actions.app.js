exports.actionNew = (menuItem, browserWindow, event) => {
  browserWindow.webContents.send('new-project');
}

exports.actionOpen = (menuItem, browserWindow, event) => {
  browserWindow.webContents.send('open-project');
}