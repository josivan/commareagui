const generate = (sender, _path, data) => {
  if (data.artifacts.javaRequest)
    _generateJavaRequest(data);

  if (data.artifacts.javaResponse)
    _generateJavaResponse(data);
}

const _generateJavaRequest = (data) => {

}

const _generateJavaResponse = (data) => {

}

module.exports = {
  generate: generate
}