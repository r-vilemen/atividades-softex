"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functionAddQuestion_1 = require("./functionAddQuestion");
// Questão 1:
(0, functionAddQuestion_1.addQ)();
var variavelNull = null;
console.log("A vari\u00E1vel variavelNull \u00E9 do tipo: ".concat(typeof variavelNull));
// Questão 2:
(0, functionAddQuestion_1.addQ)();
var variavelUndefined = undefined;
console.log("A vari\u00E1vel variavelUndefined tem o valor de: ".concat(variavelUndefined));
// Questão 3:
(0, functionAddQuestion_1.addQ)();
console.log("A vari\u00E1vel variavelNull \u00E9 igual a null? ".concat(variavelNull === null ? "Sim" : "Não", "."));
// Questão 4:
(0, functionAddQuestion_1.addQ)();
console.log("A vari\u00E1vel variavelUndefined \u00E9 igual a undefined? ".concat(variavelUndefined === undefined ? "Sim" : "Não", "."));
// Questão 5:
(0, functionAddQuestion_1.addQ)();
var pessoa = {};
console.log("A vari\u00E1vel pessoa tem o atributo nome? ".concat(pessoa.nome ? "Sim" : "Não", "."));
pessoa.nome = 'Rodrigo';
console.log("Ap\u00F3s a adi\u00E7\u00E3o, a vari\u00E1vel pessoa tem o atributo nome? ".concat(pessoa.nome ? "Sim" : "Não", "."));
console.log("O nome da pessoa \u00E9: ".concat(pessoa.nome, "."));
