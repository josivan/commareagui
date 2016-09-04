var actionNew = function() {
  console.log('Clicado em Novo');
}

var actionOpen = function() {
  console.log('Clicado em Abrir');
}

const actions =  {
  actionNew: actionNew,
  actionOpen: actionOpen
}

module.exports = actions;