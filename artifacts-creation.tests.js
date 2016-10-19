const fh = require('./components/file-handler.app');
const ag = require('./components/artifacts/artifacts-generator.app');

class MyEmitter {
  send(channel, param) {
    console.log('channel', channel);
    console.log('param', param);
  }
}
const myEmitter = new MyEmitter();

let _json = fh.abrir('./AporteCancela.caproject');
ag.generate(myEmitter, _json);

