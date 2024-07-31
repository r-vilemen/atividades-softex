//Questão 1
const numero = Number(prompt('Digite um número inteiro: '));

if (numero > 0) {
    document.write('O número é positivo');
} else if (numero < 0) {
    document.write('O número é negativo');
} else {
    document.write('O número é igual a zero');
}

//Questão 2
const idade = Number(prompt('Digite a idade: '));

if (idade >= 18) {
    document.write('Maior de idade');
} else {
    document.write('Menor de idade');
}

//Questão 3
const numero1 = Number(prompt('Digite o primeiro número inteiro: '));
const numero2 = Number(prompt('Digite o segundo número inteiro: '));

if (numero1 > numero2) {
    document.write('O primeiro número é maior');
} else if (numero2 > numero1) {
    document.write('O segundo número é maior');
} else {
    document.write('Os números são iguais');
}

//Questão 4
const numero3 = Number(prompt('Digite um número inteiro: '));

if (numero3 % 2 === 0) {
    document.write('O número é par');
} else {
    document.write('O número é ímpar');
}

//Questão 5
const nota1 = Number(prompt('Digite a primeira nota: '));
const nota2 = Number(prompt('Digite a segunda nota: '));
const nota3 = Number(prompt('Digite a terceira nota: '));

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    document.write('Aluno aprovado');
} else {
    document.write('Aluno reprovado');
}

//Questão 6
const nome1 = prompt('Digite o nome da primeira pessoa: ');
const nome2 = prompt('Digite o nome da segunda pessoa: ');

if (nome1 && nome2 && nome1.length > nome2.length) {
    document.write('A primeira pessoa possui mais caracteres em seu nome');
} else if (nome1 && nome2 && nome2.length > nome1.length) {
    document.write('A segunda pessoa possui mais caracteres em seu nome');
} else {
    document.write('As duas pessoas possuem a mesma quantidade de caracteres em seus nomes');
}

//Questão 7
const caractere = prompt('Digite um caractere: ');

if (caractere && caractere.length === 1) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    if (vogais.includes(caractere.toLowerCase())) {
        document.write('O caractere é uma vogal');
    } else {
        document.write('O caractere é uma consoante');
    }
} else {
    document.write('Digite apenas um caractere');
}

//Questão 8
const numero4 = Number(prompt('Digite o primeiro número: '));
const numero5 = Number(prompt('Digite o segundo número: '));
const numero6 = Number(prompt('Digite o terceiro número: '));

if (numero4 <= numero5 && numero4 <= numero3) {
    if (numero5 <= numero6) {
        document.write(numero4 + ', ' + numero5 + ', ' + numero6);
    } else {
        document.write(numero4 + ', ' + numero6 + ', ' + numero5);
    }
} else if (numero5 <= numero4 && numero5 <= numero6) {
    if (numero4 <= numero6) {
        document.write(numero5 + ', ' + numero4 + ', ' + numero6);
    } else {
        document.write(numero5 + ', ' + numero6 + ', ' + numero4);
    }
} else {
    if (numero4 <= numero5) {
        document.write(numero6 + ', ' + numero4 + ', ' + numero5);
    } else {
        document.write(numero6 + ', ' + numero5 + ', ' + numero4);
    }
}

//Questão 9
const peso = Number(prompt('Digite o peso em kg: '));
const altura = Number(prompt('Digite a altura em metros: '));

const imc = peso / (altura * altura);

if (imc < 18.5) {
    document.write('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    document.write('Peso normal');
} else if (imc >= 25 && imc < 30) {
    document.write('Sobrepeso');
} else if (imc >= 30 && imc < 35) {
    document.write('Obeso');
} else {
    document.write('Muito obeso');
}

//Questão 10
const mes = Number(prompt('Digite um número de mês (1 a 12): '));

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
const salario = Number(prompt('Digite o salário do funcionário: '));

let aumento: number;

if (salario > 1500) {
    aumento = salario * 0.1;
} else {
    aumento = salario * 0.15;
}

const novoSalario = salario + aumento;

document.write(`O novo salário do funcionário é: R$ ${novoSalario.toFixed(2)}`);

//Questão 12
const numero7 = Number(prompt('Digite um número inteiro: '));

if (numero7 % 3 === 0 && numero7 % 5 === 0) {
    document.write('O número é divisível por 3 e por 5 ao mesmo tempo');
} else {
    document.write('O número não é divisível por 3 e por 5 ao mesmo tempo');
}

//Questão 13
const diaSemana = prompt('Digite o dia da semana: ');

if (diaSemana && diaSemana.toLowerCase() === 'sábado' || diaSemana && diaSemana.toLowerCase() === 'domingo') {
    document.write('Fim de semana');
} else {
    document.write('Dia útil');
}

//Questão 14
const nota = Number(prompt('Digite um número inteiro de 1 a 5: '));

switch (nota) {
    case 1:
        document.write('Muito insuficiente');
        break;
    case 2:
        document.write('Insuficiente');
        break;
    case 3:
        document.write('Regular');
        break;
    case 4:
        document.write('Bom');
        break;
    case 5:
        document.write('Muito bom');
        break;
    default:
        document.write('Valor inválido');
        break;
}

//Questão 15
const diaSemanaNumero = Number(prompt('Digite um número entre 1 e 7: '));

let diaSemanaTexto: string;

switch (diaSemanaNumero) {
    case 1:
        diaSemanaTexto = 'Domingo';
        break;
    case 2:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 3:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 7:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Número inválido';
        break;
}

document.write(diaSemanaTexto);

//Questão 16
try {
    const numeroDecimal = Number(prompt('Digite um número decimal: '));
    const numeroInteiro = Math.round(numeroDecimal);
    document.write(`O número arredondado é: ${numeroInteiro}`);
} catch (error) {
    document.write('Ocorreu um erro ao processar o número decimal');
}

//Questão 17
const idade2 = Number(prompt('Digite a idade: '));

if (idade2 >= 0 && idade2 <= 1) {
    document.write('Bebê');
} else if (idade2 > 1 && idade2 <= 12) {
    document.write('Criança');
} else if (idade2 > 12 && idade2 <= 18) {
    document.write('Adolescente');
} else if (idade2 > 18) {
    document.write('Adulto');
} else {
    document.write('Idade inválida');
}

//Questão 18
const estadoCivil = prompt('Digite o seu estado civil: ');

switch (estadoCivil && estadoCivil.toLowerCase()) {
    case 'solteiro':
        document.write('Você é solteiro');
        break;
    case 'casado':
        document.write('Você é casado');
        break;
    case 'divorciado':
        document.write('Você é divorciado');
        break;
    case 'viúvo':
        document.write('Você é viúvo');
        break;
    default:
        document.write('Estado civil inválido');
        break;
}

//Questão 19
const num1 = Number(prompt('Digite o primeiro número inteiro: '));
const num2 = Number(prompt('Digite o segundo número inteiro: '));
const operacao = Number(prompt('Escolha a operação (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão): '));

let resultado: number;

switch (operacao) {
    case 1:
        resultado = num1 + num2;
        document.write(`O resultado da soma é: ${resultado}`);
        break;
    case 2:
        resultado = num1 - num2;
        document.write(`O resultado da subtração é: ${resultado}`);
        break;
    case 3:
        resultado = num1 * num2;
        document.write(`O resultado da multiplicação é: ${resultado}`);
        break;
    case 4:
        resultado = num1 / num2;
        document.write(`O resultado da divisão é: ${resultado}`);
        break;
    default:
        document.write('Operação inválida');
        break;
}

//Questão 20
try {
    const nome = prompt('Digite o nome: ');
    const idade = parseInt(prompt('Digite a idade: ') as string);

    if (isNaN(idade)) {
        throw new Error('Idade inválida');
    }

    document.write(`Nome: ${nome}<br>Idade: ${idade}`);
} catch (error) {
    document.write((error as any).message);
}

//Questão 21
try {
    const metros = Number(prompt('Digite um valor em metros: '));

    const centimetros = metros * 100;
    const milimetros = metros * 1000;
    const quilometros = metros / 1000;

    document.write(`Valor em centímetros: ${centimetros}<br>`);
    document.write(`Valor em milímetros: ${milimetros}<br>`);
    document.write(`Valor em quilômetros: ${quilometros}<br>`);
} catch (error) {
    document.write('Ocorreu um erro ao realizar os cálculos');
}
