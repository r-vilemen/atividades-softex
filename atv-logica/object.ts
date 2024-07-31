import { addQ } from "./functionAddQuestion";

// Definindo interface
interface Pessoa {
  nome: string;
  idade: number;
  endereco: string;
  profissao?: string; // Propriedade opcional
}

// Questão 1
addQ();
let pessoa: Pessoa = {
  nome: "Rodrigo",
  idade: 23,
  endereco: "Recife, PE"
};
console.log(`O nome da pessoa ${pessoa.nome}, a mesma tem ${pessoa.idade} anos e mora em ${pessoa.endereco}.`);

// Questão 2
addQ();
const nome: string = pessoa.nome;
console.log(`O nome da pessoa é ${nome}.`);

// Questão 3
addQ();
pessoa.profissao = "Engenheiro";
console.log(`A profissão da pessoa é ${pessoa.profissao}.`);

// Questão 4
addQ();
pessoa.idade = 24;
console.log(`A idade da pessoa foi atualizada para ${pessoa.idade} anos.`);

// Questão 5
addQ();
let animal: {nome: string, especie: string, cor:string} = {
    nome:'Pingo',
    especie:'Gato',
    cor:'Laranja e Branco',};
console.log(`O nome do animal é ${animal.nome}, a espécie é ${animal.especie} e a cor é ${animal.cor}.`);

// Questão 6
addQ();
let livro: {titulo?:string, autor:string, ano:number} = {
    titulo:'O Senhor dos Anéis',
    autor:'J.R.R. Tolkien',
    ano:1954,
};
console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.ano}.`);

// Questão 7
addQ();
console.log(`O livro foi escrito por ${livro.autor}.`);

// Questão 8
addQ();
livro.ano = 1955;
console.log(`O ano do livro foi atualzado para: ${livro.ano}.`);

// Questão 9
addQ();
delete livro.titulo;
console.log(`O livro não possui mais título, ficando apenas desta forma: ${livro}.`);

// Questão 10
addQ();
let carro: {modelo?:string, marca:string, ano:number} = {
    modelo:'Fusca',
    marca:'Volkswagen',
    ano:1970,
};
console.log(`O carro é um ${carro.modelo} da marca ${carro.marca} e foi fabricado em ${carro.ano}.`);
console.log(carro);

// Questão 11
addQ();
carro.modelo = undefined;
console.log(`O modelo do carro foi definido como ${carro.modelo}.`);
console.log(carro);