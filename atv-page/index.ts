// const number1 = prompt("Digite o primeiro número: ");
// const number2 = prompt("Digite o segundo número: ");
// console.log(`O número 1 digitado é: ${number1}`);
// console.log(`O número 2 digitado é: ${number2}`);

// const numeroConvertido = Number(number1);
// const numeroConvertido2 = Number(number2);

// console.log(typeof numeroConvertido);
// console.log(typeof numeroConvertido2);

// alert(`A soma dos números é: ${parseInt(number1) + parseInt(number2)}`);

// console.log("testando");

const altura = Number(prompt("Digite a sua altura: "));
const peso = Number(prompt("Digite o seu peso: "));
const imc = peso / (altura * altura);
alert(`Seu IMC é: ${imc.toFixed(2)}`);