const fs = require('fs');
const builder = require('xmlbuilder');

const generateRequestXSD = (arg) => {
  let sWriter = builder.streamWriter(process.stdout).set({pretty: true});
  let sequence = _createXSD(arg, 'In'); 
  sequence.doc().end(sWriter);
}

const generateResponseXSD = (arg) => {
  let sWriter = builder.streamWriter(process.stdout).set({pretty: true});
  let sequence = _createXSD(arg, 'Out'); 
  sequence.doc().end(sWriter);
}

const _createXSD = (data, operation) => {
  let op = `${data.prjName + operation}`;
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
  generateRequestXSD: generateRequestXSD,
  generateResponseXSD: generateResponseXSD
}