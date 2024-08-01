import { addQ } from "./functionAddQuestion";

const numero1:number = -1;
const numero2:number = 10;

// Questão 1
addQ();
console.log(numero1 == numero2 ? "Os números são iguais." : "Os números são diferentes.");

// Questão 2
addQ();
console.log(numero1 != numero2 ? "Os números são diferentes." : "Os números são iguais.");

// Questão 3
addQ();
console.log(numero1 > numero2 ? "O primeiro número é maior que o segundo." : "O primeiro número não é maior que o segundo.");

// Questão 4
addQ();
console.log(numero1 < numero2 ? "O primeiro número é menor que o segundo." : "O primeiro número não é menor que o segundo.");

// Questão 5
addQ();
console.log(numero1 >= numero2 ? "O primeiro número é maior ou igual ao segundo." : "O primeiro número não é maior ou igual ao segundo.");

// Questão 6
addQ();
console.log(numero1 <= numero2 ? "O primeiro número é menor ou igual que o segundo." : "O primeiro número não é menor ou igual que o segundo.");

// Questão 7
addQ();
console.log(numero1 > 0 && numero2 > 0 ? "Ambas as condições são verdadeiras." : "Pelo menos uma das condições é falsa.");

// Questão 8
addQ();
console.log(numero1 > 0 || numero2 > 0 ? "Pelo menos uma das condições é verdadeira." : "Ambas as condições são falsas.");

// Questão 9
addQ();
console.log(!(numero1 === numero2) ? "A condição é verdadeira." : "A condição é falsa.");

// Questão 10
addQ();
console.log(15 >= 10 && 15 <= 20 ? "O número está dentro do intervalo." : "O número está fora do intervalo.");

// Questão 11
addQ();
console.log(numero1 < 10 || numero1 > 20 ? "O número está dentro do intervalo." : "O número está fora do intervalo.");

// Questão 12
addQ();
console.log(numero1 > 0 || numero1 == 0 ? "O número é positivo." : "O número é negativo.");

// Questão 13
addQ();
const texto:string = "texto";
console.log(texto.length == 0 ? "O texto está vazio." : "O texto não está vazio.");

// Questão 14
addQ();
console.log(typeof texto == "string" ? "A variável é uma string." : "A variável não é uma string.");