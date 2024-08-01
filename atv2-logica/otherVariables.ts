import { addQ } from "./functionAddQuestion";

// Questão 1:
addQ();
const variavelNull:null = null;
console.log(`A variável variavelNull é do tipo: ${typeof variavelNull}`);

// Questão 2:
addQ();
const variavelUndefined:undefined = undefined;
console.log(`A variável variavelUndefined tem o valor de: ${variavelUndefined}`);

// Questão 3:
addQ();
console.log(`A variável variavelNull é igual a null? ${variavelNull === null ? "Sim" : "Não"}.`);

// Questão 4:
addQ();
console.log(`A variável variavelUndefined é igual a undefined? ${variavelUndefined === undefined ? "Sim" : "Não"}.`);

// Questão 5:
addQ();
const pessoa: {nome?:string} = {};
console.log(`A variável pessoa tem o atributo nome? ${pessoa.nome ? "Sim" : "Não"}.`);
pessoa.nome = 'Rodrigo';
console.log(`Após a adição, a variável pessoa tem o atributo nome? ${pessoa.nome ? "Sim" : "Não"}.`);
console.log(`O nome da pessoa é: ${pessoa.nome}.`);