// Questão 1
// Estrutura:

// FOR: Inicialização, condição e incremento são definidos em uma única linha.
// WHILE: Apenas a condição é definida na linha do comando; a inicialização e o incremento são feitos dentro do bloco.

// Uso Comum:
// FOR: Ideal para loops com um número fixo de iterações.
// WHILE: Ideal para loops onde o número de iterações depende de uma condição variável.

// Controle do Loop:
// FOR: Mais compacto, com controle do loop definido na própria linha do comando.
// WHILE: Mais flexível, com controle do loop (inicialização e incremento) dentro do bloco de código.

// Exemplo de Uso:
// FOR: Iteração sobre arrays ou execução de um bloco de código um número fixo de vezes.
// WHILE: Execução de um bloco de código enquanto uma condição específica FOR verdadeira.

// Semântica:
// FOR: Enfatiza a contagem e iteração.
// WHILE: Enfatiza a condição de continuação.

// Questão 2
// 🔻O uso do FOR é quando soubermos o número exato de iterações ou quando estiver iterando sobre coleções como arrays.🔻
// 🔸O uso do WHILE é quando a condição de término não for baseada em um contador simples ou quando precisar de mais
// flexibilidade no controle do loop.🔸

// Questão 3
let i: number = 0;
while (i < 10) {
  console.log("Testando uma frase");
  i++;
}

// Questão 4
let i2: number = 465484133;
while (i2 > 10) {
  console.log(i2);
  i2 /= 35;
}

// Questão 5
let i3 = 0;
do {
  console.log(i3);
  i3++;
} while (i3 < 5);

// Questão 6
let i4: number = 1;
while (i4 <= 10) {
  console.log(i4);
  i4++;
}

// Questão 7
let i5: number = 10;
while (i5 >= 1) {
  console.log(i5);
  i5--;
}

// Questão 8
let sum = 0;
let i6 = 1;
while (i6 <= 100) {
  sum += i6;
  i6++;
}
console.log("A soma dos números de 1 a 100 é: " + sum);

// Questão 9
let product = 1;
let i7 = 1;
while (i7 <= 5) {
  product *= i7;
  i7++;
}
console.log("O produto dos números de 1 a 5 é: " + product);

// Questão 10
let i8 = 1;
while (i8 <= 10) {
  console.log(`9 x ${i8} = ${9 * i8}`);
  i8++;
}

// Questão 11
let number: number;
let smallest: number;
let largest: number;

console.log("Digite uma sequência de números inteiros (digite 0 para parar):");

number = Number(prompt("Digite um número:"));
smallest = number;
largest = number;

while (number !== 0) {
  if (number < smallest) {
    smallest = number;
  }
  if (number > largest) {
    largest = number;
  }
  number = Number(prompt("Digite um número:"));
}

console.log("O menor valor digitado é: " + smallest);
console.log("O maior valor digitado é: " + largest);

// Questão 12
let count = 0;
let number2 = 0;

console.log("Digite uma sequência de números inteiros (digite -1 para parar):");

while (number2 !== -1) {
  number2 = Number(prompt("Digite um número:"));
  if (number2 !== -1) {
    sum += number2;
    count++;
  }
}

const average = sum / count;
console.log("A média dos números digitados é: " + average);

// Questão 13
let number3 = Number(prompt("Digite um número inteiro:"));
let sumOfCubedDigits = 0;

while (number3 > 0) {
  const digit = number3 % 10;
  sumOfCubedDigits += Math.pow(digit, 3);
  number3 = Math.floor(number3 / 10);
}

console.log("A soma dos dígitos elevados ao cubo é: " + sumOfCubedDigits);

// Questão 14
let i9 = 1;
while (i9 <= 100) {
  if (i9 % 2 !== 0) {
    console.log(i9);
  }
  i9++;
}

// Questão 15
let i10 = 1;
while (i10 <= 50) {
  if (i10 % 3 === 0) {
    console.log(i10);
  }
  i10++;
}

// Questão 16
let i11 = 0;
let count1 = 0;

while (i11 < 5) {
  const nota = Number(prompt("Digite a nota do aluno:"));
  if (nota >= 7) {
    count1++;
  }
  i11++;
}

console.log(`O número de alunos aprovados é: ${count}`);

// Questão 17
let countEven = 0;
let countOdd = 0;
let number4 = Number(prompt("Digite um número inteiro:"));

while (number4 !== 0) {
  if (number4 % 2 === 0) {
    countEven++;
  } else {
    countOdd++;
  }
  number4 = Number(prompt("Digite um número inteiro:"));
}

console.log(
  "Quantidade de números pares digitados antes do primeiro número ímpar: " +
    countEven
);

// Questão 18
let number1 = Number(prompt("Digite um número inteiro:"));

while (number1 !== 0) {
  if (number1 % 2 === 0) {
    countEven++;
  } else {
    countOdd++;
  }
  number1 = Number(prompt("Digite um número inteiro:"));
  if (number1 % 2 === 0) {
    console.log("Quantidade de números pares digitados: " + countEven);
    console.log("Quantidade de números ímpares digitados: " + countOdd);
  }
}

// Questão 19
let countDivisibleBy2 = 0;
let countDivisibleBy3 = 0;
let countDivisibleBy5 = 0;
let number5 = Number(prompt("Digite um número inteiro:"));

while (number5 !== 0) {
  if (number5 % 2 === 0) {
    countDivisibleBy2++;
  }
  if (number5 % 3 === 0) {
    countDivisibleBy3++;
  }
  if (number5 % 5 === 0) {
    countDivisibleBy5++;
  }
  number5 = Number(prompt("Digite um número inteiro:"));
}

console.log("Quantidade de números divisíveis por 2: " + countDivisibleBy2);
console.log("Quantidade de números divisíveis por 3: " + countDivisibleBy3);
console.log("Quantidade de números divisíveis por 5: " + countDivisibleBy5);

// Questão 20
let sumDivisibleBy3 = 0;
let countDivisibleBy03 = 0;
let number6 = Number(prompt("Digite um número inteiro:"));

while (number6 !== 0) {
  if (number6 % 3 === 0) {
    sumDivisibleBy3 += number6;
    countDivisibleBy03++;
  }
  number6 = Number(prompt("Digite um número inteiro:"));
}

if (countDivisibleBy3 > 0) {
  const averageDivisibleBy3 = sumDivisibleBy3 / countDivisibleBy3;
  console.log("A média dos números divisíveis por 3 é: " + averageDivisibleBy3);
} else {
  console.log("Nenhum número divisível por 3 foi digitado.");
}

// Questão 21
let countMoreThanThreeDigits = 0;
let number8 = Number(prompt("Digite um número inteiro:"));

while (number8 !== 0) {
  if (Math.abs(number8) >= 1000) {
    countMoreThanThreeDigits++;
  }
  number8 = Number(prompt("Digite um número inteiro:"));
}

console.log(
  "Quantidade de números com mais de três dígitos: " + countMoreThanThreeDigits
);

// Questão 22
let sumBetween50And100 = 0;
let countBetween50And100 = 0;
let number9 = Number(prompt("Digite um número inteiro:"));

while (number9 !== 0) {
  if (number9 > 50 && number9 < 100) {
    sumBetween50And100 += number9;
    countBetween50And100++;
  }
  number9 = Number(prompt("Digite um número inteiro:"));
}

if (countBetween50And100 > 0) {
  const averageBetween50And100 = sumBetween50And100 / countBetween50And100;
  console.log(
    "A média dos números entre 50 e 100 é: " + averageBetween50And100
  );
} else {
  console.log("Nenhum número entre 50 e 100 foi digitado.");
}

// Questão 23
let smallestPositiveOdd: number = Infinity;
let number10: number = Number(prompt("Digite um número inteiro:"));

while (number10 !== 0) {
  if (number10 > 0 && number10 % 2 !== 0 && number10 < smallestPositiveOdd) {
    smallestPositiveOdd = number10;
  }
  number10 = Number(prompt("Digite um número inteiro:"));
}

if (smallestPositiveOdd !== Infinity) {
  console.log(
    "O menor valor positivo e ímpar digitado é: " + smallestPositiveOdd
  );
} else {
  console.log("Nenhum número positivo e ímpar foi digitado.");
}

// Questão 24
let number11 = Number(prompt("Digite um número inteiro:"));

while (number11 !== 0) {
  if (number11 % 2 === 0) {
    countEven++;
  } else {
    countOdd++;
  }
  number11 = Number(prompt("Digite um número inteiro:"));
  if (number11 % 2 === 0) {
    console.log("Quantidade de números pares digitados: " + countEven);
    console.log("Quantidade de números ímpares digitados: " + countOdd);
  }
}
