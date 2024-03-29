const {ipcMain, dialog} = require('electron')

ipcMain.on('save-dialog', (event) => {
  const options = {
    title: 'Save an Image',
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
    ]
  }
  dialog.showSaveDialog(options, (filename) => {
    event.sender.send('saved-file', filename)
  })
})

ipcMain.on('save-file-dialog-saveorganization', (event) => {
  const options = {
    title: 'Save File Organization',
    filters: [
      { name: 'CSV', extensions: ['csv'] }
    ]
  }
  dialog.showSaveDialog(options, (filename) => {
    event.sender.send('selected-saveorganizationfile', filename)
  })
})
