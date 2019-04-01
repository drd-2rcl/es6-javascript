"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// operadores rest e spread
// REST = resto das propriedades
// EXEMPLO 1
// const usuario = {
//   nome: 'Diogo',
//   idade: 26,
//   empresa: 'Nenhuma'
// }
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);
// EXEMPLO 2
// const arr = [1,2,3,4];
// const [a,b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// EXEMPLO 3
// function soma(...params){
//   return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 3, 4));
// EXEMPLO 4
// function soma(a, b, ...params){
//   return params;
// }
// console.log(soma(1, 3, 4, 4, 5, 7));
// --------//--------
// SPREAD = repassa as informações de um objeto ou array para outra estrutura de dados
// EXEMPLO 1
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// EXEMPLO 2
var usuario1 = {
  nome: 'Diogo',
  idade: '26',
  empresa: 'nenhuma'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Vanderlei'
});

console.log(usuario2);
