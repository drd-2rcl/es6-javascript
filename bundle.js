"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//classe estática isolada
var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2)); // ------------//------------
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
