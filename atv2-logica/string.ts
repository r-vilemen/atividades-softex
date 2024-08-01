// Atividade
import { addQ } from "./functionAddQuestion";

// Questão 1
addQ();
const nome:string = "Rodrigo";
console.log(`Meu nome é ${nome}.`);

// Questão 2
addQ();
const frase:string = nome;
console.log(`Meu nome tem  ${frase.length} letras.`);

// Questão 3
addQ();
const palavra:string = "qualquer";
console.log(
  `A palavra ${palavra} inicia com a letra ${palavra[0].toUpperCase()}.`
);

// Questão 4
addQ();
const frase2:string = "Hoje é um dia ensolarado.";
console.log(frase2.toUpperCase());

// Questão 5
addQ();
let endereco:string = "Rua das Ninfas, 123.";
let enderecoAlterado:string = endereco.replace("123", "456");
console.log(
  `O endereço original é ${endereco} e o novo endereço é ${enderecoAlterado}`
);
