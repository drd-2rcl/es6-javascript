// ASYNC AWAIT ES8

// promise para simular algo que vai demorar 2 segundos para executar;
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

//resposta: > es8
// async e await com a function normal
// async function executaPromise() {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }
// executaPromise();

// async e await com arrow function
const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}
executaPromise();

// resposta: < es8
// minhaPromise()
//   .then(response => {
//   console.log(response);
//   })
//   .catch(err => {

//   })