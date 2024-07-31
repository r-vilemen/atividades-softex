import { addQ } from "./functionAddQuestion";

// Questão 1
addQ();
const estachovendo:boolean = false;
const result:string = estachovendo ? 'sim' : 'não';
console.log(`Está chovendo? ${result}`)

// Questão 2
addQ();
const verdadeiro: boolean = true;
console.log(`A variável verdadeiro está como: ${verdadeiro}.`);

// Questão 3
addQ();
const falso: boolean = false;
console.log(`A variável falso está como: ${falso}.`);

// Questão 4
addQ();
console.log(`A variável verdadeiro é igual ${verdadeiro} a variável falso é igual ${falso}, logo, são diferentes.`);

//Questão 5
addQ();
const temperatura:number = 30;
const result2:string = temperatura > 30 ? 'Sim' : 'Não';
console.log(`A temperatura é maior que 30°? ${result2}, a temperatura é ${temperatura}°.`);

// Questão 6
addQ();
let x:number = 10;
let y:number = 5;
const result3:string = x > y ? 'Sim' : 'Não';
console.log(`${x} é maior que ${y}? ${result3}.`);

// Questão 7
addQ();
let z:number = 25;
let w:number = 15;
const teste:string = z < w ? 'Sim' : 'Não';
console.log(`${z} é menor que ${w}? ${teste}.`);
