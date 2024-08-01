"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functionAddQuestion_1 = require("./functionAddQuestion");
// Questão 1
(0, functionAddQuestion_1.addQ)();
var pessoa = {
    nome: "Rodrigo",
    idade: 23,
    endereco: "Recife, PE"
};
console.log("O nome da pessoa ".concat(pessoa.nome, ", a mesma tem ").concat(pessoa.idade, " anos e mora em ").concat(pessoa.endereco, "."));
// Questão 2
(0, functionAddQuestion_1.addQ)();
var nome = pessoa.nome;
console.log("O nome da pessoa \u00E9 ".concat(nome, "."));
// Questão 3
(0, functionAddQuestion_1.addQ)();
pessoa.profissao = "Engenheiro";
console.log("A profiss\u00E3o da pessoa \u00E9 ".concat(pessoa.profissao, "."));
// Questão 4
(0, functionAddQuestion_1.addQ)();
pessoa.idade = 24;
console.log("A idade da pessoa foi atualizada para ".concat(pessoa.idade, " anos."));
// Questão 5
(0, functionAddQuestion_1.addQ)();
var animal = {
    nome: 'Pingo',
    especie: 'Gato',
    cor: 'Laranja e Branco',
};
console.log("O nome do animal \u00E9 ".concat(animal.nome, ", a esp\u00E9cie \u00E9 ").concat(animal.especie, " e a cor \u00E9 ").concat(animal.cor, "."));
// Questão 6
(0, functionAddQuestion_1.addQ)();
var livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    ano: 1954,
};
console.log("O livro ".concat(livro.titulo, " foi escrito por ").concat(livro.autor, " em ").concat(livro.ano, "."));
// Questão 7
(0, functionAddQuestion_1.addQ)();
console.log("O livro foi escrito por ".concat(livro.autor, "."));
// Questão 8
(0, functionAddQuestion_1.addQ)();
livro.ano = 1955;
console.log("O ano do livro foi atualzado para: ".concat(livro.ano, "."));
// Questão 9
(0, functionAddQuestion_1.addQ)();
delete livro.titulo;
console.log("O livro n\u00E3o possui mais t\u00EDtulo, ficando apenas desta forma: ".concat(livro, "."));
// Questão 10
(0, functionAddQuestion_1.addQ)();
var carro = {
    modelo: 'Fusca',
    marca: 'Volkswagen',
    ano: 1970,
};
console.log("O carro \u00E9 um ".concat(carro.modelo, " da marca ").concat(carro.marca, " e foi fabricado em ").concat(carro.ano, "."));
console.log(carro);
// Questão 11
(0, functionAddQuestion_1.addQ)();
carro.modelo = undefined;
console.log("O modelo do carro foi definido como ".concat(carro.modelo, "."));
console.log(carro);
