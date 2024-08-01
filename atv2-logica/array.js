"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functionAddQuestion_1 = require("./functionAddQuestion");
// Questão 1
(0, functionAddQuestion_1.addQ)();
var numeros = [];
console.log("o array numeros tem seu valor \u00E9 de: ".concat(numeros, "."));
// Questão 2
(0, functionAddQuestion_1.addQ)();
numeros.push(1, 2, 3, 4);
console.log("O array numeros agora cont\u00E9m os n\u00FAmeros: ".concat(numeros, "."));
// Questão 3
(0, functionAddQuestion_1.addQ)();
console.log("O segundo elemento do array numeros \u00E9: ".concat(numeros[1], "."));
// Questão 4
(0, functionAddQuestion_1.addQ)();
numeros[2] = 10;
console.log("O terceiro elemento do array numeros agora \u00E9: ".concat(numeros[2], "."));
// Questão 5
(0, functionAddQuestion_1.addQ)();
numeros.pop();
console.log("O array numeros agora cont\u00E9m os n\u00FAmeros: ".concat(numeros, "."));
// Questão 6
(0, functionAddQuestion_1.addQ)();
console.log("O comprimento do array numeros \u00E9: ".concat(numeros.length, "."));
// Questão 7
(0, functionAddQuestion_1.addQ)();
var frutas = ['maçã', 'banana', 'laranja'];
console.log("O array frutas cont\u00E9m as frutas: ".concat(frutas, "."));
// Questão 8
(0, functionAddQuestion_1.addQ)();
console.log("O primeiro elemento do array frutas \u00E9: ".concat(frutas[0]));
// Questão 9
(0, functionAddQuestion_1.addQ)();
frutas.push('uva');
console.log("O array frutas agora cont\u00E9m as frutas: ".concat(frutas, "."));
// Questão 10
(0, functionAddQuestion_1.addQ)();
var aluno = {
    nome: "Rodrigo",
    idade: 23
};
var alunos = [];
alunos.push(aluno);
console.log("O array alunos tem seu valor: ".concat(JSON.stringify(alunos), "."));
// Questão 11
(0, functionAddQuestion_1.addQ)();
console.log("Nome do primeiro aluno: ".concat(alunos[0].nome));
// Questão 12
(0, functionAddQuestion_1.addQ)();
var aluno2 = {
    nome: "Maria",
    idade: 20
};
var aluno3 = {
    nome: "João",
    idade: 25
};
var aluno4 = {
    nome: "Ana",
    idade: 22
};
alunos.push(aluno2, aluno3, aluno4);
console.log("O array alunos agora cont\u00E9m os alunos: ".concat(JSON.stringify(alunos), "."));
// Questão 13
(0, functionAddQuestion_1.addQ)();
var produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Açúcar",
    "Café",
    "Farinha",
    "Óleo",
    "Sal",
    "Pão"
];
var produtosPares = produtos.filter(function (_, index) { return index % 2 === 0; });
console.log("Produtos em posições pares:", produtosPares);
