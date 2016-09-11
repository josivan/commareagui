var fs = require('fs');

exports.criar = (arg) => {
  var fileName = arg['prjName'] + ".caproject";
  var ws = fs.createWriteStream(fileName);
  ws.write(JSON.stringify(arg));
};

exports.abrir = (arg) => {
  var file = fs.readFileSync(arg, 'utf8');
  return JSON.parse(file);
};