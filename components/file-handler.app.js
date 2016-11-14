var fs = require('fs');

let createProject = (arg) => {
  var fileName =  `${arg.project.name}.caproject`;
  delete arg["action"];
  var ws = fs.createWriteStream(fileName);
  ws.write(JSON.stringify(arg));
}

let openProject = (arg) => {
  var file = fs.readFileSync(arg, 'utf8');
  return JSON.parse(file);
}

let loadDataType = () => {
  return JSON.parse(fs.readFileSync('./config/data-type.json'));
}

let loadOptions = () => {
  try {
    return JSON.parse(fs.readFileSync('./config/commarea-options.json'));
  }
  catch (err) {
    console.error('Error on loadOptions', err);
    return {};
  }
}

let saveOptions = (data) => {
  let ws = fs.createWriteStream('./config/commarea-options.json');
  ws.write(JSON.stringify(data));
}

module.exports = {
  createProject: createProject,
  loadDataType: loadDataType,
  loadOptions: loadOptions,
  openProject: openProject,
  saveOptions: saveOptions
}