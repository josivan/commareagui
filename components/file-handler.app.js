var fs = require('fs');

exports.criar = (arg) => {
  var fileName = arg['prjName'] + ".caproject";
  delete arg["action"];
  var ws = fs.createWriteStream(fileName);
  ws.write(JSON.stringify(arg));
};

exports.abrir = (arg) => {
  var file = fs.readFileSync(arg, 'utf8');
  return JSON.parse(file);
};

exports.loadDataType = () => {
  return  JSON.parse(fs.readFileSync('./config/data-type.json'));
}