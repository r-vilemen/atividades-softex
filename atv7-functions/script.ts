// Questão 1

console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");

console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");

console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");

// Questão 2

function criarFrases() {
  const frases = [
    "Estudar é muito bom",
    "Paciência e persistência",
    "Revisão é a mãe do aprendizado",
  ];

  frases.forEach((frase) => console.log(frase));
}

criarFrases();

// Questão 3

function soma(numl: number, num2: number) {
  console.log(numl + num2);
}
soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);

// Questão 4

function soma2(valor1: number, valor2: number, frase?: string) {
  return valor1 + valor2;
}

console.log(soma2(1, 2));
console.log(soma2(2, 3));
console.log(soma2(3, 4));

// Questão 5

function soma3(a: number, b: number): number {
  return a + b;
}

console.log(soma3(1, 2));
console.log(soma3(2, 3));

// Questão 6

function isPar(numero: number): boolean {
  return numero % 2 === 0;
}

console.log(isPar(2));
console.log(isPar(3));

// Questão 7

function media(nota1: number, nota2: number, nota3: number): number {
  return (nota1 + nota2 + nota3) / 3;
}

console.log(media(7, 8, 9));
console.log(media(5, 6, 7));
console.log(media(9, 9, 10));

// Questão 8

function imc(peso: number, altura: number): number {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(75, 1.75));

// Questão 9

function calcularDesconto(valor: number, percentualDesconto: number): number {
  const desconto = valor * (percentualDesconto / 100);
  const valorComDesconto = valor - desconto;
  return valorComDesconto;
}

console.log(calcularDesconto(100, 10));

// Questão 10

function calcularImpostoRenda(salarioBruto: number): number {
  if (salarioBruto <= 1903.98) {
    return 0;
  } else if (salarioBruto <= 2826.65) {
    return salarioBruto * 0.075;
  } else if (salarioBruto <= 3751.05) {
    return salarioBruto * 0.15;
  } else if (salarioBruto <= 4664.68) {
    return salarioBruto * 0.225;
  } else {
    return salarioBruto * 0.275;
  }
}

console.log(calcularImpostoRenda(1500));
console.log(calcularImpostoRenda(2000));
console.log(calcularImpostoRenda(3000));
console.log(calcularImpostoRenda(4000));
console.log(calcularImpostoRenda(5000));

// Questão 11

function calcularMediaArredondada(numeros: number[]): number {
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  const media = soma / numeros.length;
  return Math.round(media);
}

console.log(calcularMediaArredondada([1, 2, 3, 4, 5]));

// Questão 12

function contarDigitosParesImpares(numero: number): [number, number] {
  let digitosPares = 0;
  let digitosImpares = 0;

  const digitos = String(numero).split("");

  digitos.forEach((digito) => {
    const numero = Number(digito);
    if (numero % 2 === 0) {
      digitosPares++;
    } else {
      digitosImpares++;
    }
  });

  return [digitosPares, digitosImpares];
}

console.log(contarDigitosParesImpares(123456789));

// Questão 13

function calcularMediaAlunos(alunos: { nome: string; nota: number }[]): number {
  let somaNotas = 0;
  let quantidadeAlunos = alunos.length;

  alunos.forEach((aluno) => {
    somaNotas += aluno.nota;
  });

  return somaNotas / quantidadeAlunos;
}

console.log(
  calcularMediaAlunos([
    { nome: "José", nota: 8 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 6 },
  ])
);

// Questão 14

function calcularIdade(nascimento: number): number {
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - nascimento;
  return idade;
}

console.log(calcularIdade(1990));

// Questão 15
function gerarTabuada(numero: number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

gerarTabuada(5);

// Questão 16

function advinheNumero() {
  const numeroCorreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;

  while (true) {
    const tentativa = Number(prompt("Digite um número entre 1 e 100:"));

    if (isNaN(tentativa)) {
      console.log("Por favor, digite um número válido.");
      continue;
    }

    tentativas++;

    if (tentativa === numeroCorreto) {
      console.log(
        `Parabéns! Você acertou o número em ${tentativas} tentativas.`
      );
      break;
    } else if (tentativa < numeroCorreto) {
      console.log("O número correto é maior.");
    } else {
      console.log("O número correto é menor.");
    }
  }
}

advinheNumero();

// Questão 17

function verificarPropriedade(objeto: any, propriedade: string): boolean {
  return propriedade in objeto;
}

console.log(verificarPropriedade({ nome: "José" }, "nome"));

// Questão 18

function calcularPrecoProduto(
  valorCusto: number,
  margemLucro: number,
  valorFrete: number
): number {
  const precoVenda = valorCusto + valorCusto * (margemLucro / 100) + valorFrete;
  return precoVenda;
}

console.log(calcularPrecoProduto(10, 20, 5));

// Questão 19

function encontrarPalavraMaisLonga(frase: string): string {
  const palavras = frase.split(" ");
  let palavraMaisLonga = "";

  palavras.forEach((palavra) => {
    if (palavra.length > palavraMaisLonga.length) {
      palavraMaisLonga = palavra;
    }
  });

  return palavraMaisLonga;
}

console.log(encontrarPalavraMaisLonga("Tutorial de desenvolvimento da web"));

// Questão 20

function printInFrame(words: string[]): void {
  const maxLength = Math.max(...words.map((word) => word.length));
  const border = "*".repeat(maxLength + 4);

  console.log(border);
  words.forEach((word) => {
    const padding = " ".repeat(maxLength - word.length);
    console.log(`* ${word}${padding} *`);
  });
  console.log(border);
}

printInFrame(["Hello", "World", "in", "a", "frame"]);

// Questão 21

function filterStrings(array: string[]): string[] {
  return array.filter((str) => str.length > 5);
}

const strings = ["apple", "banana", "orange", "kiwi", "grapefruit"];
const filteredStrings = filterStrings(strings);
console.log(filteredStrings);

// Questão 22

function filterBooksByAuthor(
  books: { title: string; author: string; year: number }[],
  author: string
): { title: string; author: string; year: number }[] {
  return books.filter((book) => book.author === author);
}

const books = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2019 },
  { title: "Book 3", author: "Author 1", year: 2018 },
  { title: "Book 4", author: "Author 3", year: 2021 },
];

const author = "Author 1";
const filteredBooks = filterBooksByAuthor(books, author);
console.log(filteredBooks);

// Questão 23

function encontrarPessoaMaisVelha(
  pessoas: { nome: string; idade: number }[]
): string {
  let pessoaMaisVelha = pessoas[0];

  for (let i = 1; i < pessoas.length; i++) {
    if (pessoas[i].idade > pessoaMaisVelha.idade) {
      pessoaMaisVelha = pessoas[i];
    }
  }

  return pessoaMaisVelha.nome;
}

const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 28 },
];

const pessoaMaisVelha = encontrarPessoaMaisVelha(pessoas);
console.log(pessoaMaisVelha);

// Questão 24

function filterCarsByYear(
  cars: { marca: string; modelo: string; ano: number }[],
  year: number
): { marca: string; modelo: string; ano: number }[] {
  return cars.filter((car) => car.ano > year);
}

const cars = [
  { marca: "Toyota", modelo: "Corolla", ano: 2018 },
  { marca: "Honda", modelo: "Civic", ano: 2019 },
  { marca: "Ford", modelo: "Mustang", ano: 2020 },
  { marca: "Chevrolet", modelo: "Camaro", ano: 2017 },
];

const filteredCars = filterCarsByYear(cars, 2018);
console.log(filteredCars);

// Questão 25

function inverterString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(inverterString("JavaScript"));
