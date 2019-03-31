//operações em arrays

const arr = [1, 3, 4, 5, 8, 9, 10];

// map = percorre o vetor e retorna algo de dentro
const newArr = arr.map(function(item) {
  return item * 2;
})

console.log(newArr);

// reduce = consome todo o vetor e transforma em uma única variavel
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);


// filter = filtra '¬¬ lol, sempre retorna true or false
const filter = arr.filter(function(item){
  return item % 2 === 0; // par
})

console.log(filter);


// find = é utilizado para verificar se existe alguma info dentro do array ou se consegue encontrar a info dentro do arr. Sempre retorna true or false.

const find = arr.find(function(item) {
  // return item === 4;
  return item === 2;
});

console.log(find);

