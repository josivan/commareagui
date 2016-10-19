const fs = require('fs');
const mkdirp = require('mkdirp');

const createErrorMessage = (fileName, _path) => {
  return _createMessage(false, fileName, _path);
}

const createSuccessMessage = (fileName, _path) => {
  return _createMessage(true, fileName, _path);
}

const _createMessage = (success, fileName, _path) => {
  return {
    status: success ? 'OK' : 'ERROR',
    artifact: {
      name: fileName,
      path: _path
    }
  };
}

const createPathIfRequired = (_path) => {
  if (!fs.existsSync(_path)) {
    mkdirp.sync(_path);
  }

  return _path;
}

module.exports = {
  createErrorMessage: createErrorMessage,
  createSuccessMessage: createSuccessMessage,
  createPathIfRequired: createPathIfRequired
}