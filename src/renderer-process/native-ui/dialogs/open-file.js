const {ipcRenderer} = require('electron')

// Metadata
const selectSubmissionBtn = document.getElementById('button-select-submission')
selectSubmissionBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog-submission')
})
ipcRenderer.on('selected-submission', (event, path) => {
  if (path.length > 0) {
    document.getElementById('selected-submission').value = path
  }
})

const selectDescriptionBtn = document.getElementById('button-select-description')
selectDescriptionBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog-description')
})
ipcRenderer.on('selected-description', (event, path) => {
  if (path.length > 0) {
      document.getElementById('selected-description').value = path
  }
})


const selectSubjectsBtn = document.getElementById('button-select-subjects')
selectSubjectsBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog-subjects')
})
ipcRenderer.on('selected-subjects', (event, path) => {
  if (path.length > 0) {
    document.getElementById('selected-subjects').value = path
  }
})

const selectSamplesBtn = document.getElementById('button-select-samples')
selectSamplesBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog-samples')
})
ipcRenderer.on('selected-samples', (event, path) => {
  if (path.length > 0) {
    document.getElementById('selected-samples').value = path
  }
})

const selectnewDatasetBtn = document.getElementById('button-select-new-dataset')
selectnewDatasetBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog-newdataset')
})
ipcRenderer.on('selected-new-dataset', (event, path) => {
  document.getElementById('selected-new-dataset').value = path
})

const selectDatasetSubmitBtn = document.getElementById('button-select-submit-dataset')
selectDatasetSubmitBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog-submit-dataset')
})
ipcRenderer.on('selected-submit-dataset', (event, path) => {
  document.getElementById('selected-submit-dataset').value = path
})
