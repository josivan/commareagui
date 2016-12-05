const path  = require('path');
const spawn = require('child_process').spawn;
const agu   = require('./artifacts-generator.utils.app');
const op    =  require.main.require('./components/file-handler.app').loadOptions();

const requestXSD = 'C:\\temp\\josivan\\teste\\estrutura\\top\\br\\com\\bradesco\\web\\previdencia\\service\\data\\commarea\\aporte\\cancela\\response\\response.xsd';

const generate = (sender, _path, data) => {

  let opIsOk = Boolean(op.castor) && Boolean(op.javaPath) && Boolean(op.xerces);

  if (!opIsOk) {
    sender.send('artifacts-generated', {
      status: 'ERROR',
      artifact: {
        name: 'fileName',
        path: '_path'
      }
    })
  }

  if (data.artifacts.javaRequest)
    _generateJavaRequest(data);

  if (data.artifacts.javaResponse)
    _generateJavaResponse(data);
}

const _generateJavaRequest = (data) => {
  _generateJavaCode(
    data, 
    mountXSDRequestPath(data), 
    data.project.package.concat('.request'));
}

const _generateJavaResponse = (data) => {
  _generateJavaCode(
    data, 
    mountXSDResponsePath(data), 
    data.project.package.concat('.response'));
}

const _generateJavaCode = (data, xsdPath, package) => {
  var child = spawn(op.javaPath, [
    '-cp', 
    mountClassPath(),
    'org.exolab.castor.builder.SourceGenerator',
    '-i', 
    xsdPath,
    '-package',
    package,
    '-dest',
    data.project.path
  ]);

  var resultStdout = child.stdout;
  var resultStderr = child.stderr;

  child.on('close', (code, signal) => { console.log('close', code, signal); });
  child.on('disconnect', () => { console.log('disconnect'); });
  child.on('error', () => { console.log('error'); });
  child.on('exit', (code, signal) => { console.log('exit', code, signal); });

  resultStdout.on('close', () => { console.log('out close'); });
  resultStdout.on('data', (data) => { console.log('out data', data.toString()); });
  resultStdout.on('end', () => { console.log('out end'); });
  resultStdout.on('error', (error) => { console.log('out error', error); });
  resultStdout.on('readable', () => { console.log('out readable'); });

  resultStderr.on('data', (data) => { console.log('err data', data.toString()); });
}

let mountClassPath = () => {
  return op.castor.concat(path.delimiter).concat(op.xerces);
}

let mountXSDRequestPath = (data) => {
  return mountXSDPath(data)
    .concat(path.sep)
    .concat('request')
    .concat(path.sep)
    .concat('request.xsd');
}

let mountXSDResponsePath = (data) => {
  return mountXSDPath(data)
    .concat(path.sep)
    .concat('response')
    .concat(path.sep)
    .concat('response.xsd');
}

let mountXSDPath = (data) => {
  return agu.packageToPath(data.project.path)
    .concat(path.sep)
    .concat(agu.packageToPath(data.project.package));
}

module.exports = {
  generate: generate
}