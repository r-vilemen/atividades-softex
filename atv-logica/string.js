"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Atividade
var functionAddQuestion_1 = require("./functionAddQuestion");
// Questão 1
(0, functionAddQuestion_1.addQ)();
var nome = "Rodrigo";
console.log("Meu nome \u00E9 ".concat(nome, "."));
// Questão 2
(0, functionAddQuestion_1.addQ)();
var frase = nome;
console.log("Meu nome tem  ".concat(frase.length, " letras."));
// Questão 3
(0, functionAddQuestion_1.addQ)();
var palavra = "qualquer";
console.log("A palavra ".concat(palavra, " inicia com a letra ").concat(palavra[0].toUpperCase(), "."));
// Questão 4
(0, functionAddQuestion_1.addQ)();
var frase2 = "Hoje é um dia ensolarado.";
console.log(frase2.toUpperCase());
// Questão 5
(0, functionAddQuestion_1.addQ)();
var endereco = "Rua das Ninfas, 123.";
var enderecoAlterado = endereco.replace("123", "456");
console.log("O endere\u00E7o original \u00E9 ".concat(endereco, " e o novo endere\u00E7o \u00E9 ").concat(enderecoAlterado));
