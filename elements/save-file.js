var saveNewFile = require('./save-new-file')
var saveUpdatedGitHubFile = require('./save-updated-github-file')

module.exports = function saveFile (props) {
  if (!props.file.saveData.source || !props.file.saveData.location) {
    return saveNewFile(props)
  } else if (props.file.saveData.source === 'github') {
    return saveUpdatedGitHubFile(props)
  }
}
