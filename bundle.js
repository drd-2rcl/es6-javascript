"use strict";

// arrow functions
var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: 'Diogo'
  };
};

console.log(teste());
