import { addQ } from "./functionAddQuestion";

// Questão 1
addQ();
const numeros:number[] = [];
console.log(`o array numeros tem seu valor é de: ${numeros}.`);

// Questão 2
addQ();
numeros.push(1, 2, 3, 4);
console.log(`O array numeros agora contém os números: ${numeros}.`);

// Questão 3
addQ();
console.log(`O segundo elemento do array numeros é: ${numeros[1]}.`);

// Questão 4
addQ();
numeros[2] = 10;
console.log(`O terceiro elemento do array numeros agora é: ${numeros[2]}.`);

// Questão 5
addQ();
numeros.pop();
console.log(`O array numeros agora contém os números: ${numeros}.`);

// Questão 6
addQ();
console.log(`O comprimento do array numeros é: ${numeros.length}.`);

// Questão 7
addQ();
const frutas:string[] = ['maçã', 'banana', 'laranja'];
console.log(`O array frutas contém as frutas: ${frutas}.`);

// Questão 8
addQ();
console.log(`O primeiro elemento do array frutas é: ${frutas[0]}`);

// Questão 9
addQ();
frutas.push('uva');
console.log(`O array frutas agora contém as frutas: ${frutas}.`);

// Questão 10
addQ();
const aluno: {nome: string, idade: number} = {
    nome: "Rodrigo",
    idade: 23
};

const alunos: {nome: string, idade: number}[] = [];
alunos.push(aluno);
console.log(`O array alunos tem seu valor: ${JSON.stringify(alunos)}.`);

// Questão 11
addQ();
console.log(`Nome do primeiro aluno: ${alunos[0].nome}`);

// Questão 12
addQ();
const aluno2 = {
    nome: "Maria",
    idade: 20
};

const aluno3 = {
    nome: "João",
    idade: 25
};

const aluno4 = {
    nome: "Ana",
    idade: 22
};

alunos.push(aluno2, aluno3, aluno4);
console.log(`O array alunos agora contém os alunos: ${JSON.stringify(alunos)}.`);

// Questão 13
addQ();
const produtos: string[] = [
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

const produtosPares = produtos.filter((_, index) => index % 2 === 0);
console.log("Produtos em posições pares:", produtosPares);
