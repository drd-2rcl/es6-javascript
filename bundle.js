"use strict";

// destructuring
var usuario = {
  nome: 'Diogo',
  idade: '26',
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario); // const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
