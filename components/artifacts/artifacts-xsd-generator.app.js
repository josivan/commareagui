const fs      = require('fs');
const path    = require('path');
const builder = require('xmlbuilder');
const agu     = require('./artifacts-generator.utils.app');

const generate = (sender, _path, data) => {
  if (data.artifacts.xsdRequest) 
    _generateXSDRequest(sender, path.normalize(path.join(_path, 'request')), data);

  if (data.artifacts.xsdResponse)
    _generateXSDResponse(sender, path.normalize(path.join(_path, 'response')), data);
}

const _generateXSDRequest = (sender, where, arg) => {
  agu.createPathIfRequired(where);
  let f = where + '/request.xsd';
  let out = _createXSD(arg, 'In');

  fs.writeFile(f, out, (err) => {
    if (err) {
      sender.send('artifacts-generated', agu.createErrorMessage('request.xsd', where));
    }
    else {
      sender.send('artifacts-generated', agu.createSuccessMessage('request.xsd', where));
    }
  });
}

const _generateXSDResponse = (sender, where, arg) => {
  agu.createPathIfRequired(where);
  let f = where + '/response.xsd';
  let out = _createXSD(arg, 'Out');
  
  fs.writeFile(f, out, (err) => {
    if (err) {
      sender.send('artifacts-generated', agu.createErrorMessage('response.xsd', where));
    }
    else {
      sender.send('artifacts-generated', agu.createSuccessMessage('response.xsd', where));
    }
  });
}

const _createXSD = (data, operation) => {
  let op = `${data.project.name + operation}`;
  let list = operation == 'In' ? data.requestFields : data.responseFields;

  let sequence = builder.begin().ele("xs:schema",
    {
      "xmlns:xs": "http://www.w3.org/2001/XMLSchema",
      "targetNamespace": `${op}`
    })
    .ele("xs:element", { "name": `${op}` })
    .ele("xs:complexType")
    .ele("xs:sequence");

  list.forEach((f) => {
    let field = builder
      .create('xs:element')
        .att('name', f.name)
        .att('type', `xs:${f.type.map}`)
        .att('nillable', !!f.nullable);
    sequence.importDocument(field);
  });

  return sequence.doc().end({pretty: true});
}

module.exports = {
  generate: generate
}