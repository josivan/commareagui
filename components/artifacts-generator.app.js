const axg = require('./artifacts-xsd-generator.app');
const ajg = require('./artifacts-java-generator.app');

const generate = (data) => {
  _checkPath(data.project.path, data.project.package)
}

const _checkPath = (path, package) => {

}

module.exports = {
  generate: generate
}