const fh = require('./components/file-handler.app');
const ag = require('./components/artifacts/artifacts-generator.app');

let _json = fh.abrir('./AporteCancela.caproject');
ag.generate(_json);