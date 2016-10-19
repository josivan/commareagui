const fs = require('fs');
const mkdirp = require('mkdirp');

const createPathIfRequired = (_path) => {
  if (!fs.existsSync(_path)) {
    mkdirp.sync(_path);
  }

  return _path;
}

module.exports = {
  createPathIfRequired: createPathIfRequired
}