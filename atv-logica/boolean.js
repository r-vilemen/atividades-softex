"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functionAddQuestion_1 = require("./functionAddQuestion");
// Questão 1
(0, functionAddQuestion_1.addQ)();
var estachovendo = false;
var result = estachovendo ? 'sim' : 'não';
console.log("Est\u00E1 chovendo? ".concat(result));
// Questão 2
(0, functionAddQuestion_1.addQ)();
var verdadeiro = true;
console.log("A vari\u00E1vel verdadeiro est\u00E1 como: ".concat(verdadeiro, "."));
// Questão 3
(0, functionAddQuestion_1.addQ)();
var falso = false;
console.log("A vari\u00E1vel falso est\u00E1 como: ".concat(falso, "."));
// Questão 4
(0, functionAddQuestion_1.addQ)();
console.log("A vari\u00E1vel verdadeiro \u00E9 igual ".concat(verdadeiro, " a vari\u00E1vel falso \u00E9 igual ").concat(falso, ", logo, s\u00E3o diferentes."));
//Questão 5
(0, functionAddQuestion_1.addQ)();
var temperatura = 30;
var result2 = temperatura > 30 ? 'Sim' : 'Não';
console.log("A temperatura \u00E9 maior que 30\u00B0? ".concat(result2, ", a temperatura \u00E9 ").concat(temperatura, "\u00B0."));
// Questão 6
(0, functionAddQuestion_1.addQ)();
var x = 10;
var y = 5;
var result3 = x > y ? 'Sim' : 'Não';
console.log("".concat(x, " \u00E9 maior que ").concat(y, "? ").concat(result3, "."));
// Questão 7
(0, functionAddQuestion_1.addQ)();
var z = 25;
var w = 15;
var teste = z < w ? 'Sim' : 'Não';
console.log("".concat(z, " \u00E9 menor que ").concat(w, "? ").concat(teste, "."));
