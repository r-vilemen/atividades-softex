//Questão 1
var numero = Number(prompt('Digite um número inteiro: '));
if (numero > 0) {
    document.write('O número é positivo');
}
else if (numero < 0) {
    document.write('O número é negativo');
}
else {
    document.write('O número é igual a zero');
}
//Questão 2
var idade = Number(prompt('Digite a idade: '));
if (idade >= 18) {
    document.write('Maior de idade');
}
else {
    document.write('Menor de idade');
}
//Questão 3
var numero1 = Number(prompt('Digite o primeiro número inteiro: '));
var numero2 = Number(prompt('Digite o segundo número inteiro: '));
if (numero1 > numero2) {
    document.write('O primeiro número é maior');
}
else if (numero2 > numero1) {
    document.write('O segundo número é maior');
}
else {
    document.write('Os números são iguais');
}
//Questão 4
var numero3 = Number(prompt('Digite um número inteiro: '));
if (numero3 % 2 === 0) {
    document.write('O número é par');
}
else {
    document.write('O número é ímpar');
}
//Questão 5
var nota1 = Number(prompt('Digite a primeira nota: '));
var nota2 = Number(prompt('Digite a segunda nota: '));
var nota3 = Number(prompt('Digite a terceira nota: '));
var media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    document.write('Aluno aprovado');
}
else {
    document.write('Aluno reprovado');
}
//Questão 6
var nome1 = prompt('Digite o nome da primeira pessoa: ');
var nome2 = prompt('Digite o nome da segunda pessoa: ');
if (nome1 && nome2 && nome1.length > nome2.length) {
    document.write('A primeira pessoa possui mais caracteres em seu nome');
}
else if (nome1 && nome2 && nome2.length > nome1.length) {
    document.write('A segunda pessoa possui mais caracteres em seu nome');
}
else {
    document.write('As duas pessoas possuem a mesma quantidade de caracteres em seus nomes');
}
//Questão 7
var caractere = prompt('Digite um caractere: ');
if (caractere && caractere.length === 1) {
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    if (vogais.includes(caractere.toLowerCase())) {
        document.write('O caractere é uma vogal');
    }
    else {
        document.write('O caractere é uma consoante');
    }
}
else {
    document.write('Digite apenas um caractere');
}
//Questão 8
var numero4 = Number(prompt('Digite o primeiro número: '));
var numero5 = Number(prompt('Digite o segundo número: '));
var numero6 = Number(prompt('Digite o terceiro número: '));
if (numero4 <= numero5 && numero4 <= numero3) {
    if (numero5 <= numero6) {
        document.write(numero4 + ', ' + numero5 + ', ' + numero6);
    }
    else {
        document.write(numero4 + ', ' + numero6 + ', ' + numero5);
    }
}
else if (numero5 <= numero4 && numero5 <= numero6) {
    if (numero4 <= numero6) {
        document.write(numero5 + ', ' + numero4 + ', ' + numero6);
    }
    else {
        document.write(numero5 + ', ' + numero6 + ', ' + numero4);
    }
}
else {
    if (numero4 <= numero5) {
        document.write(numero6 + ', ' + numero4 + ', ' + numero5);
    }
    else {
        document.write(numero6 + ', ' + numero5 + ', ' + numero4);
    }
}
//Questão 9
var peso = Number(prompt('Digite o peso em kg: '));
var altura = Number(prompt('Digite a altura em metros: '));
var imc = peso / (altura * altura);
if (imc < 18.5) {
    document.write('Abaixo do peso');
}
else if (imc >= 18.5 && imc < 25) {
    document.write('Peso normal');
}
else if (imc >= 25 && imc < 30) {
    document.write('Sobrepeso');
}
else if (imc >= 30 && imc < 35) {
    document.write('Obeso');
}
else {
    document.write('Muito obeso');
}
//Questão 10
var mes = Number(prompt('Digite um número de mês (1 a 12): '));
switch (mes) {
    case 1:
        document.write('Janeiro');
        break;
    case 2:
        document.write('Fevereiro');
        break;
    case 3:
        document.write('Março');
        break;
    case 4:
        document.write('Abril');
        break;
    case 5:
        document.write('Maio');
        break;
    case 6:
        document.write('Junho');
        break;
    case 7:
        document.write('Julho');
        break;
    case 8:
        document.write('Agosto');
        break;
    case 9:
        document.write('Setembro');
        break;
    case 10:
        document.write('Outubro');
        break;
    case 11:
        document.write('Novembro');
        break;
    case 12:
        document.write('Dezembro');
        break;
    default:
        document.write('Mês inválido');
        break;
}
//Questão 11
var salario = Number(prompt('Digite o salário do funcionário: '));
var aumento;
if (salario > 1500) {
    aumento = salario * 0.1;
}
else {
    aumento = salario * 0.15;
}
var novoSalario = salario + aumento;
document.write("O novo sal\u00E1rio do funcion\u00E1rio \u00E9: R$ ".concat(novoSalario.toFixed(2)));
//Questão 12
