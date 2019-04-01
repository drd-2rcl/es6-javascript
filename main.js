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
const usuario1 = {
  nome: 'Diogo',
  idade: '26',
  empresa: 'nenhuma',
}

const usuario2 = { ...usuario1, nome: 'Vanderlei' };

console.log(usuario2);