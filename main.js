//classe estática isolada

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));

// ------------//------------

// classe estática trazendo dados do constructor

// class TodoList {
//   constructor() {
//     this.todos = [];
//   }

//   static addTodo() {
//     this.todos.push('NOVO TODO');
//     console.log(this.todos);
//   }

// }

// TodoList.addTodo();



// ------------//------------


// classe filha acessando a classe pai

// class List {
//   constructor() {
//     this.data = [];
//   }

//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super();

//     this.usuario = 'Diogo';
//   }

//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//   MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();