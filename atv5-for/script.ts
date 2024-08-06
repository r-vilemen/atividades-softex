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
let number3 = Number(prompt("Digite um número inteiro:"));

console.log(`Os divisores de ${number3} são:`);
for (let i = 1; i <= number3; i++) {
  if (number3 % i === 0) {
    console.log(i);
  }
}

// Questão 23
let heights: number[] = [];

for (let i = 0; i < 5; i++) {
  let height = Number(prompt(`Digite a altura da pessoa ${i + 1}:`));
  heights.push(height);
}

let sum3 = 0;
for (let height of heights) {
  sum3 += height;
}

let average = sum3 / heights.length;
console.log(`A média de altura das pessoas é: ${average}`);

// Questão 24
let number4 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Questão 25
let sumOfEvenDigits = 0;

for (let digit = number; digit > 0; digit = Math.floor(digit / 10)) {
  let currentDigit = digit % 10;
  if (currentDigit % 2 === 0) {
    sumOfEvenDigits += currentDigit;
  }
}

console.log(`A soma dos dígitos pares do número é: ${sumOfEvenDigits}`);

// Questão 26
let reversedNumber = 0;
let numberCopy = number;

for (; numberCopy > 0; numberCopy = Math.floor(numberCopy / 10)) {
  let digit = numberCopy % 10;
  reversedNumber = reversedNumber * 10 + digit;
}

console.log(`O número invertido é: ${reversedNumber}`);
