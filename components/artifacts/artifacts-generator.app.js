const fs    = require('fs');
const path  = require('path');
const agu   = require('./artifacts-generator.utils.app');
const axg   = require('./artifacts-xsd-generator.app');
const ajg   = require('./artifacts-java-generator.app');

const generate = (sender, data) => {
  let _path = _checkPath(data.project.path, data.project.package)
  
  // axg.generate(sender, _path, data);
  ajg.generate(sender, _path, data);
}

const _checkPath = (_path, _package) => {
  let result = null;
  if (_path) {
    result = agu.createPathIfRequired(_path);
  }

  if (_package) {
    let pToPack = path.join(_path || '.', _package.replace(/\./g, '/')); 
    result = agu.createPathIfRequired(pToPack);
  }
  
  return result;
}

module.exports = {
  generate: generate
}