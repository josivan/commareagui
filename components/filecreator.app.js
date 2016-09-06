var fs = require('fs');

exports.criar = (arg) => {
  var fileName = arg['prjName'] + ".caproject";
  var ws = fs.createWriteStream(fileName);
  ws.write(JSON.stringify(arg));
};