var spawn = require('child_process').spawn;

const javaCommand = 'C:\\developer\\Java\\jdk1.8.0_77\\bin\\java';
const javaCP = 'C:\\aporte-bradesco-celular\\GeradorCommarea\\lib\\castor-1.0.jar;C:\\aporte-bradesco-celular\\GeradorCommarea\\lib\\xercesImpl-2.4.0.jar';
const requestXSD = 'C:\\temp\\josivan\\teste\\estrutura\\top\\br\\com\\bradesco\\web\\previdencia\\service\\data\\commarea\\aporte\\cancela\\response\\response.xsd';

const generate = (sender, _path, data) => {
  if (data.artifacts.javaRequest)
    _generateJavaRequest(data);

  if (data.artifacts.javaResponse)
    _generateJavaResponse(data);
}

const _generateJavaRequest = (data) => {
  // java -cp lib\castor-1.0.jar;lib\xercesImpl-2.4.0.jar org.exolab.castor.builder.SourceGenerator -i %1 -package %2
  var child = spawn(javaCommand, [
    '-cp', 
    javaCP,
    'org.exolab.castor.builder.SourceGenerator',
    '-i', 
    requestXSD,
    '-package',
    'pacote.josivan'
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

const _generateJavaResponse = (data) => {
}

module.exports = {
  generate: generate
}