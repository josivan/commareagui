const fs      = require('fs');
const path    = require('path');
const builder = require('xmlbuilder');
const agu     = require('./artifacts-generator.utils.app');

const generate = (_path, data) => {
  if (data.artifacts.xsdRequest) 
    _generateXSDRequest(path.normalize(path.join(_path, 'request')), data);

  if (data.artifacts.xsdResponse)
    _generateXSDResponse(path.normalize(path.join(_path, 'response')), data);
}

const _generateXSDRequest = (where, arg) => {
  agu.createPathIfRequired(where);
  let ws = fs.createWriteStream(where + '/request.xsd');
  let sWriter = builder.streamWriter(ws).set({pretty: true});
  let sequence = _createXSD(arg, 'In'); 
  sequence.doc().end(sWriter);
}

const _generateXSDResponse = (where, arg) => {
  agu.createPathIfRequired(where);
  let ws = fs.createWriteStream(where + '/response.xsd');
  let sWriter = builder.streamWriter(ws).set({pretty: true});
  let sequence = _createXSD(arg, 'Out'); 
  sequence.doc().end(sWriter);
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

  return sequence;
}

module.exports = {
  generate: generate
}