// Questão 1

// É uma estrutura de repetição de um bloco de código

// Questão 2

// Através de uma declaração inicial

// Questão 3

// Quando a iteração do loop (bloco de código) for falsa.

// Questão 4

// É controlada pela expressão de incremento (++) ou decremento (--).

// Questão 5

for (let i = 0; i < 10; i++) {
  console.log(`testando uma frase! ${i}`);
}

// Questão 6

for (let i2 = 0; i2 < 10; i2++) {
  console.log(i2);
}

// Questão 7
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// Questão 8
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// Questão 9
let nomes = ["João", "Maria", "José", "Helena", "Pedro"];

for (let n of nomes) {
  console.log(n);
}

// Questão 10
let program = 0;
for (let program = 0; program < 10; program++) {
  console.log(program);
}

// Questão 11
let program2 = 10;
for (let program2 = 10; program2 > 0; program2--) {
  console.log(program2);
}

// Questão 12
let number1 = 0;
for (let i = 1; i <= 100; i++) {
  number1 += i;
}

// Questão 13
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Questão 14
let product = 1;
for (let i = 1; i <= 5; i++) {
  product *= i;
}
console.log(product);

// Questão 15
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// Questão 16
let sum = 0;
for (let i = 1; i <= 5; i++) {
  let nota = Number(prompt(`Digite a nota ${i}:`));
  sum += nota;
}

let media = sum / 5;
console.log(`A média das notas é: ${media}`);

// Questão 17
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Questão 18
let numbers: number[] = [];

for (let i = 0; i < 10; i++) {
  let number = Number(prompt(`Digite o número ${i + 1}:`));
  numbers.push(number);
}

let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(`O maior número digitado é: ${max}`);
console.log(`O menor número digitado é: ${min}`);

// Questão 19
let number2 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Questão 20
let notas: number[] = [];

for (let i = 0; i < 5; i++) {
  let nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`));
  notas.push(nota);
}

let aprovados = 0;
for (let nota of notas) {
  if (nota >= 7) {
    aprovados++;
  }
}

console.log(`Quantidade de alunos aprovados: ${aprovados}`);

// Questão 21
let number = Number(prompt("Digite um número inteiro:"));
let sum2 = 0;

while (number > 0) {
  sum2 += number % 10;
  number = Math.floor(number / 10);
}

console.log(`A soma dos dígitos do número é: ${sum2}`);

// Questão 22
