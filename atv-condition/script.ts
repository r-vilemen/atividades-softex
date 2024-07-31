// let numero = prompt('Digite um número: ');
// alert(`O número digitado foi: ${numero}`);

// if (numero === null) {
//     alert('número inválido!');
//     }    else {
//         alert('informação válida!');
//     }

// // const numerotransformado = parseInt(numero);

const altura = Number(prompt('Digite sua altura: '));
const peso = Number(prompt('Digite seu peso: '));

const imc = peso / (altura * altura);
let tabelaIMC = '';

if (imc < 18.5) {
    tabelaIMC = 'Abaixo do peso normal';
} else if (imc >= 18.5 && imc < 25) {
    tabelaIMC = 'Peso normal';
} else if (imc >= 25 && imc < 30) {
    tabelaIMC = 'Sobrepeso';
} else if (imc >= 30 && imc < 35) {
    tabelaIMC = 'Obesidade grau 1';
} else if (imc >= 35 && imc < 40) {
    tabelaIMC = 'Obesidade grau 2';
} else {
    tabelaIMC = 'Obesidade grau 3';
}

alert(`Seu IMC é ${imc.toFixed(2)} e sua classificação é: ${tabelaIMC}`);


const temperatura = Number(prompt('Digite a temperatura em Celsius: '));
let condicaoClimatica = '';

if (temperatura < 0) {
    condicaoClimatica = 'Congelante';
} else if (temperatura >= 0 && temperatura < 10) {
    condicaoClimatica = 'Frio';
} else if (temperatura >= 10 && temperatura < 20) {
    condicaoClimatica = 'Agradável';
} else if (temperatura >= 20 && temperatura < 30) {
    condicaoClimatica = 'Quente';
} else if (temperatura >= 30 && temperatura < 40) {
    condicaoClimatica = 'Muito Quente';
} else {
    condicaoClimatica = 'Extremamente Quente';
}

alert(`A condição climática para uma temperatura de ${temperatura}º graus Celsius é: ${condicaoClimatica}`);


location.reload();