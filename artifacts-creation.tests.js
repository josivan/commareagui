const fh = require('./components/file-handler.app');
const ag = require('./components/artifacts-generator.app');

let _json = fh.abrir('./AporteCancela.caproject');
console.log('Request');
ag.generateRequestXSD(_json);

console.log('\nResponse');
ag.generateResponseXSD(_json);