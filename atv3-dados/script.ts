// Questão 5
let nome = prompt("Por favor, digite seu nome:");
document.write(`Olá,  ${nome} ! Bem vindo ao site.<br>`);

// Questão 6
let idadeTexto = Number(prompt("Por favor, digite sua idade:"));
let idade: number = parseInt(idadeTexto.toString());
document.write(` Você tem ${idade} anos.<br>`);
console.log(typeof idade);

// Questão 7
let numeroInteiroTexto = prompt("Por favor, digite um número inteiro:");
let numeroDecimal: number | string = numeroInteiroTexto ? parseFloat(numeroInteiroTexto) : 'Número inválido';
document.write(`O número inteiro é: ${numeroInteiroTexto}<br>`);
document.write(` O número decimal é: ${numeroDecimal}<br>`);
console.log(typeof numeroDecimal);

// Questão 8
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let soma = numero1 + numero2;
document.write(`A soma dos números é: ${soma}<br>`);

// Questão 9
let numeroDecimal1 = Number(prompt("Por favor, digite um número decimal:"));
let quadrado = (numeroDecimal1 * numeroDecimal1);
document.write(`O quadrado do número é: ${quadrado}<br>`);

// Questão 10
let anoNascimento = Number(prompt("Por favor, digite o seu ano de nascimento:"));
let anoAtual = new Date().getFullYear();
let idade1 = anoAtual - anoNascimento;
document.write(`Sua idade é: ${idade1} anos.<br>`);
 
// Questão 11
let nome1 = prompt("Por favor, digite seu nome:");
let nome2 = prompt("Por favor, digite seu sobrenome:");
document.write(`Seu nome completo é: ${nome1} ${nome2}!<br>`);

// Questão 12
let numeros = prompt("Por favor, digite uma sequência de números separados por espaço:");
let numerosArray = numeros?.split(" ");
let quantidadeNumeros = numerosArray?.length;
document.write(`Foram digitados ${quantidadeNumeros} números.<br>`);

// Questão 13
let animal = prompt("Por favor, digite o nome de um animal:");
document.write(`O animal digitado é: ${animal}.<br>`);

// Questão 14
let nome3 = prompt("Por favor, digite seu nome:");
let nome4 = prompt("Por favor, digite seu sobrenome:");
document.write(`Seu nome completo invertido é: ${nome4} ${nome3}!<br>`);

// Questão 15
let stringqualquer = prompt("Por favor, digite um texto qualquer:");
document.write(`O tamanho do texto digitado foi: ${stringqualquer?.length}.<br>`);

// Questão 16
let numero = Number(prompt("Por favor, digite um número:"));
const numeroPar = numero % 2 === 0;
document.write(`O número digitado é: ${numeroPar ? 'Par': 'Ímpar'}.<br>`);

// Questão 17
let numeroint = Number(prompt("Por favor, digite um número inteiro:"));
const numeroPositivo = numeroint >= 0;
document.write(`O número digitado é: ${numeroPositivo ? 'Positivo': 'Negativo'}.<br>`);

// Questão 18
let numero3 = Number(prompt("Por favor, digite um número:"));
let numero4 = Number(prompt("Por favor, digite outro número:"));
document.write(`O maior número digitado foi: ${numero3 > numero4 ? numero3: numero4}.<br>`);

// Questão 19
let altura = Number(prompt("Por favor, digite sua altura em metros:"));
let peso = Number(prompt("Por favor, digite seu peso em quilogramas:"));
let imc = peso / (altura * altura);
document.write(`Seu índice de massa corporal (IMC) é: ${imc.toFixed(2)}.<br>`);

// Questão 20
let nomeuser = prompt("Por favor, digite seu nome de usuário:");
if(nomeuser == null){
    
}
if(nomeuser == null){
    document.write(`Você não digitou nada.<br>`);

}else{
    const tamanhoNome = nomeuser.length;
    document.write(`Seu nome contém mais de 5 caracteres? ${tamanhoNome > 5 ? 'Sim': 'Não'}.<br>`);
};

// Questão 21
let estadoCivil = prompt("Por favor, digite seu estado civil:");
let mensagemEstadoCivil = "";

switch (estadoCivil) {
    case "casado":
        mensagemEstadoCivil = "Você é casado(a)";
        break;
    case "solteiro":
        mensagemEstadoCivil = "Você é solteiro(a)";
        break;
    case "divorciado":
        mensagemEstadoCivil = "Você é divorciado(a)";
        break;
    case "viuvo":
        mensagemEstadoCivil = "Você é viúvo(a)";
        break;
    default:
        mensagemEstadoCivil = "Estado civil não reconhecido";
}

document.write(mensagemEstadoCivil + "<br>");

// Questão 22
let base = Number(prompt("Por favor, digite a base do retângulo:"));
let altura1 = Number(prompt("Por favor, digite a altura do retângulo:"));
let area = base * altura1;
document.write(`A área do retângulo é: ${area}.<br>`);

// Questão 23
let cidade = prompt("Por favor, digite o nome da sua cidade:");
if (cidade && cidade.charAt(0).toUpperCase() === 'S') {
    document.write("A cidade começa com a letra 'S'.<br>");
} else {
    document.write("A cidade não começa com a letra 'S'.<br>");
}

// Questão 24
let numeroDecimal2 = Number(prompt("Por favor, digite um número decimal:"));
let numeroDecimal3 = Number(prompt("Por favor, digite outro número decimal:"));
let resto = numeroDecimal2 % numeroDecimal3;
document.write(`O resto da divisão entre os números é: ${resto}<br>`);

// Questão 25
let numeroDecimal4 = Number(prompt("Por favor, digite um número decimal:"));
let numeroInteiro2 = parseInt(numeroDecimal4.toString());
document.write(`O número inteiro é: ${numeroInteiro2}<br>`);

// Questão 26
let numeroString = prompt("Por favor, digite um número inteiro:");
let numeroInteiro = Number(numeroString);
let resultado = (numeroInteiro + 10).toString();
document.write(`O resultado da soma é: ${resultado}<br>`);

// Questão 27
let data = prompt("Por favor, digite uma data no formato 'dd/mm/aaaa':");
let partesData = data ? data.split("/") : [];
let dia = parseInt(partesData[0]);
let mes = parseInt(partesData[1]);
let ano = parseInt(partesData[2]);

document.write(`Dia: ${dia}<br>`);
document.write(`Mês: ${mes}<br>`);
document.write(`Ano: ${ano}<br>`);

// Questão 28
let cidadeUsuario = prompt("Por favor, digite o nome da sua cidade:");
let estadoUsuario = prompt("Por favor, digite o nome do seu estado:");

let mensagemCompleta = `Você mora em ${cidadeUsuario}, ${estadoUsuario}.`;
document.write(mensagemCompleta + "<br>");

// Questão 29
let anoNascimento1 = prompt("Por favor, digite o seu ano de nascimento:");
let mensagemBoasVindas = `Bem-vindo ao nosso programa, nascido em ${anoNascimento1}!`;
document.write(mensagemBoasVindas + "<br>");

// Questão 30
let numeroInteiro1 = prompt("Por favor, digite um número inteiro:");
let textoUsuario = prompt("Por favor, digite um texto:");
let resultadoConcatenacao = `${numeroInteiro1} ${textoUsuario}`;
document.write(resultadoConcatenacao + "<br>");

// Questão 31
let nomeProduto = prompt("Por favor, digite o nome do produto:");
let precoProduto = prompt("Por favor, digite o preço do produto:");
let mensagemProduto = `O produto ${nomeProduto} custa R$${precoProduto}.`;
document.write(mensagemProduto + "<br>");

// Questão 32
let numeroInteiro3 = Number(prompt("Por favor, digite um número inteiro:"));
let mensagem = `O dobro do número é ${numeroInteiro3 * 2}.`;
document.write(mensagem + "<br>");

// Questão 33
let email = prompt("Por favor, digite seu endereço de e-mail:");
let mensagemAgradecimento = `Obrigado por fornecer seu endereço de e-mail: ${email}.`;
document.write(mensagemAgradecimento + "<br>");

// Questão 34
let numero5 = Number(prompt("Digite o primeiro número inteiro:"));
let numero6 = Number(prompt("Digite o segundo número inteiro:"));

let soma1 = numero5 + numero6;
let diferenca = numero5 - numero6;
let produto = numero5 * numero6;
let quociente = Math.floor(numero5 / numero6);

document.write(`A soma dos números é: ${soma1}<br>`);
document.write(`A diferença dos números é: ${diferenca}<br>`);
document.write(`O produto dos números é: ${produto}<br>`);
document.write(`O quociente dos números é: ${quociente}<br>`);

// Questão 35
let baseTriangulo = Number(prompt("Por favor, digite a base do triângulo:"));
let alturaTriangulo = Number(prompt("Por favor, digite a altura do triângulo:"));
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
document.write(`A área do triângulo é: ${areaTriangulo}<br>`);

// Questão 36
let raio = Number(prompt("Por favor, digite o raio da circunferência:"));
let perimetro = 2 * Math.PI * raio;
document.write(`O perímetro da circunferência é: ${perimetro.toFixed(2)}<br>`);

// Questão 37
let baseRetangulo = Number(prompt("Por favor, digite a base do retângulo:"));
let alturaRetangulo = Number(prompt("Por favor, digite a altura do retângulo:"));
let perimetroRetangulo = 2 * (baseRetangulo + alturaRetangulo);
document.write(`O perímetro do retângulo é: ${perimetroRetangulo}<br>`);

// Questão 38
let numero01 = Number(prompt("Digite o primeiro número decimal:"));
let numero02 = Number(prompt("Digite o segundo número decimal:"));
let numero03 = Number(prompt("Digite o terceiro número decimal:"));

let media = (numero01 + numero02 + numero03) / 3;
document.write(`A média dos números é: ${media}<br>`);

// Questão 39
let idadeAnos = Number(prompt("Por favor, digite sua idade:"));
let meses = idadeAnos * 12;
let dias = idadeAnos * 365;
document.write(`Você já viveu ${meses} meses e ${dias} dias.<br>`);

// Questão 40
let valorReais = Number(prompt("Por favor, digite o valor em reais:"));
let cotacaoDolar = Number(prompt("Por favor, digite a cotação do dólar:"));

let valorDolares = valorReais / cotacaoDolar;
document.write(`O valor em dólares é: ${valorDolares.toFixed(2)}<br>`);

// Questão 41
let numeroDecimal5 = Number(prompt("Por favor, digite um número decimal:"));
let numeroInteiro4 = Math.round(numeroDecimal5);
document.write(`O número arredondado é: ${numeroInteiro4}<br>`);

// Questão 42
let n1 = Number(prompt("Digite o primeiro número inteiro:"));
let n2 = Number(prompt("Digite o segundo número inteiro:"));
let n3 = Number(prompt("Digite o terceiro número inteiro:"));

let resultado2 = (n1 + n2) * n3;
document.write(`O resultado da operação é: ${resultado2}<br>`);

// Questão 43
let celsius = Number(prompt("Por favor, digite uma temperatura em graus Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
document.write(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F<br>`);