class Pessoa {
  nome: string = "Rodrigo";
  idade: number = 23;
  cor: string = "Branco";
  sexo: string = "Masculino";

  constructor(nome: string, idade: number, cor: string, sexo: string) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.sexo = sexo;
  }
}

const pessoa1 = new Pessoa("Rodrigo", 23, "Branco", "Masculino");
const pessoa2 = new Pessoa("Augusto", 40, "Branco", "Masculino");
const pessoa3 = new Pessoa("Juarez", 60, "Branco", "Masculino");

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
