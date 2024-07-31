// Questão 5
var nome = prompt("Por favor, digite seu nome:");
document.write("Ol\u00E1,  ".concat(nome, " ! Bem vindo ao site.<br>"));
// Questão 6
var idadeTexto = Number(prompt("Por favor, digite sua idade:"));
var idade = parseInt(idadeTexto.toString());
document.write(" Voc\u00EA tem ".concat(idade, " anos.<br>"));
console.log(typeof idade);
// Questão 7
var numeroInteiroTexto = prompt("Por favor, digite um número inteiro:");
var numeroDecimal = numeroInteiroTexto ? parseFloat(numeroInteiroTexto) : 'Número inválido';
document.write("O n\u00FAmero inteiro \u00E9: ".concat(numeroInteiroTexto, "<br>"));
document.write(" O n\u00FAmero decimal \u00E9: ".concat(numeroDecimal, "<br>"));
console.log(typeof numeroDecimal);
// Questão 8
var numero1 = Number(prompt("Digite o primeiro número:"));
var numero2 = Number(prompt("Digite o segundo número:"));
var soma = numero1 + numero2;
document.write("A soma dos n\u00FAmeros \u00E9: ".concat(soma, "<br>"));
// Questão 9
var numeroDecimal1 = Number(prompt("Por favor, digite um número decimal:"));
var quadrado = (numeroDecimal1 * numeroDecimal1);
document.write("O quadrado do n\u00FAmero \u00E9: ".concat(quadrado, "<br>"));
// Questão 10
var anoNascimento = Number(prompt("Por favor, digite o seu ano de nascimento:"));
var anoAtual = new Date().getFullYear();
var idade1 = anoAtual - anoNascimento;
document.write("Sua idade \u00E9: ".concat(idade1, " anos.<br>"));
// Questão 11
var nome1 = prompt("Por favor, digite seu nome:");
var nome2 = prompt("Por favor, digite seu sobrenome:");
document.write("Seu nome completo \u00E9: ".concat(nome1, " ").concat(nome2, "!<br>"));
// Questão 12
var numeros = prompt("Por favor, digite uma sequência de números separados por espaço:");
var numerosArray = numeros === null || numeros === void 0 ? void 0 : numeros.split(" ");
var quantidadeNumeros = numerosArray === null || numerosArray === void 0 ? void 0 : numerosArray.length;
document.write("Foram digitados ".concat(quantidadeNumeros, " n\u00FAmeros.<br>"));
// Questão 13
var animal = prompt("Por favor, digite o nome de um animal:");
document.write("O animal digitado \u00E9: ".concat(animal, ".<br>"));
// Questão 14
var nome3 = prompt("Por favor, digite seu nome:");
var nome4 = prompt("Por favor, digite seu sobrenome:");
document.write("Seu nome completo invertido \u00E9: ".concat(nome4, " ").concat(nome3, "!<br>"));
// Questão 15
var stringqualquer = prompt("Por favor, digite um texto qualquer:");
document.write("O tamanho do texto digitado foi: ".concat(stringqualquer === null || stringqualquer === void 0 ? void 0 : stringqualquer.length, ".<br>"));
// Questão 16
var numero = Number(prompt("Por favor, digite um número:"));
var numeroPar = numero % 2 === 0;
document.write("O n\u00FAmero digitado \u00E9: ".concat(numeroPar ? 'Par' : 'Ímpar', ".<br>"));
// Questão 17
var numeroint = Number(prompt("Por favor, digite um número inteiro:"));
var numeroPositivo = numeroint >= 0;
document.write("O n\u00FAmero digitado \u00E9: ".concat(numeroPositivo ? 'Positivo' : 'Negativo', ".<br>"));
// Questão 18
var numero3 = Number(prompt("Por favor, digite um número:"));
var numero4 = Number(prompt("Por favor, digite outro número:"));
document.write("O maior n\u00FAmero digitado foi: ".concat(numero3 > numero4 ? numero3 : numero4, ".<br>"));
// Questão 19
var altura = Number(prompt("Por favor, digite sua altura em metros:"));
var peso = Number(prompt("Por favor, digite seu peso em quilogramas:"));
var imc = peso / (altura * altura);
document.write("Seu \u00EDndice de massa corporal (IMC) \u00E9: ".concat(imc.toFixed(2), ".<br>"));
// Questão 20
var nomeuser = prompt("Por favor, digite seu nome de usuário:");
if (nomeuser == null) {
}
if (nomeuser == null) {
    document.write("Voc\u00EA n\u00E3o digitou nada.<br>");
}
else {
    var tamanhoNome = nomeuser.length;
    document.write("Seu nome cont\u00E9m mais de 5 caracteres? ".concat(tamanhoNome > 5 ? 'Sim' : 'Não', ".<br>"));
}
;
// Questão 21
var estadoCivil = prompt("Por favor, digite seu estado civil:");
var mensagemEstadoCivil = "";
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
var base = Number(prompt("Por favor, digite a base do retângulo:"));
var altura1 = Number(prompt("Por favor, digite a altura do retângulo:"));
var area = base * altura1;
document.write("A \u00E1rea do ret\u00E2ngulo \u00E9: ".concat(area, ".<br>"));
// Questão 23
var cidade = prompt("Por favor, digite o nome da sua cidade:");
if (cidade && cidade.charAt(0).toUpperCase() === 'S') {
    document.write("A cidade começa com a letra 'S'.<br>");
}
else {
    document.write("A cidade não começa com a letra 'S'.<br>");
}
// Questão 24
var numeroDecimal2 = Number(prompt("Por favor, digite um número decimal:"));
var numeroDecimal3 = Number(prompt("Por favor, digite outro número decimal:"));
var resto = numeroDecimal2 % numeroDecimal3;
document.write("O resto da divis\u00E3o entre os n\u00FAmeros \u00E9: ".concat(resto, "<br>"));
// Questão 25
var numeroDecimal4 = Number(prompt("Por favor, digite um número decimal:"));
var numeroInteiro2 = parseInt(numeroDecimal4.toString());
document.write("O n\u00FAmero inteiro \u00E9: ".concat(numeroInteiro2, "<br>"));
// Questão 26
var numeroString = prompt("Por favor, digite um número inteiro:");
var numeroInteiro = Number(numeroString);
var resultado = (numeroInteiro + 10).toString();
document.write("O resultado da soma \u00E9: ".concat(resultado, "<br>"));
// Questão 27
var data = prompt("Por favor, digite uma data no formato 'dd/mm/aaaa':");
var partesData = data ? data.split("/") : [];
var dia = parseInt(partesData[0]);
var mes = parseInt(partesData[1]);
var ano = parseInt(partesData[2]);
document.write("Dia: ".concat(dia, "<br>"));
document.write("M\u00EAs: ".concat(mes, "<br>"));
document.write("Ano: ".concat(ano, "<br>"));
// Questão 28
var cidadeUsuario = prompt("Por favor, digite o nome da sua cidade:");
var estadoUsuario = prompt("Por favor, digite o nome do seu estado:");
var mensagemCompleta = "Voc\u00EA mora em ".concat(cidadeUsuario, ", ").concat(estadoUsuario, ".");
document.write(mensagemCompleta + "<br>");
// Questão 29
var anoNascimento1 = prompt("Por favor, digite o seu ano de nascimento:");
var mensagemBoasVindas = "Bem-vindo ao nosso programa, nascido em ".concat(anoNascimento1, "!");
document.write(mensagemBoasVindas + "<br>");
// Questão 30
var numeroInteiro1 = prompt("Por favor, digite um número inteiro:");
var textoUsuario = prompt("Por favor, digite um texto:");
var resultadoConcatenacao = "".concat(numeroInteiro1, " ").concat(textoUsuario);
document.write(resultadoConcatenacao + "<br>");
// Questão 31
var nomeProduto = prompt("Por favor, digite o nome do produto:");
var precoProduto = prompt("Por favor, digite o preço do produto:");
var mensagemProduto = "O produto ".concat(nomeProduto, " custa R$").concat(precoProduto, ".");
document.write(mensagemProduto + "<br>");
// Questão 32
var numeroInteiro3 = Number(prompt("Por favor, digite um número inteiro:"));
var mensagem = "O dobro do n\u00FAmero \u00E9 ".concat(numeroInteiro3 * 2, ".");
document.write(mensagem + "<br>");
// Questão 33
var email = prompt("Por favor, digite seu endereço de e-mail:");
var mensagemAgradecimento = "Obrigado por fornecer seu endere\u00E7o de e-mail: ".concat(email, ".");
document.write(mensagemAgradecimento + "<br>");
// Questão 34
var numero5 = Number(prompt("Digite o primeiro número inteiro:"));
var numero6 = Number(prompt("Digite o segundo número inteiro:"));
var soma1 = numero5 + numero6;
var diferenca = numero5 - numero6;
var produto = numero5 * numero6;
var quociente = Math.floor(numero5 / numero6);
document.write("A soma dos n\u00FAmeros \u00E9: ".concat(soma1, "<br>"));
document.write("A diferen\u00E7a dos n\u00FAmeros \u00E9: ".concat(diferenca, "<br>"));
document.write("O produto dos n\u00FAmeros \u00E9: ".concat(produto, "<br>"));
document.write("O quociente dos n\u00FAmeros \u00E9: ".concat(quociente, "<br>"));
// Questão 35
var baseTriangulo = Number(prompt("Por favor, digite a base do triângulo:"));
var alturaTriangulo = Number(prompt("Por favor, digite a altura do triângulo:"));
var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
document.write("A \u00E1rea do tri\u00E2ngulo \u00E9: ".concat(areaTriangulo, "<br>"));
// Questão 36
var raio = Number(prompt("Por favor, digite o raio da circunferência:"));
var perimetro = 2 * Math.PI * raio;
document.write("O per\u00EDmetro da circunfer\u00EAncia \u00E9: ".concat(perimetro.toFixed(2), "<br>"));
// Questão 37
var baseRetangulo = Number(prompt("Por favor, digite a base do retângulo:"));
var alturaRetangulo = Number(prompt("Por favor, digite a altura do retângulo:"));
var perimetroRetangulo = 2 * (baseRetangulo + alturaRetangulo);
document.write("O per\u00EDmetro do ret\u00E2ngulo \u00E9: ".concat(perimetroRetangulo, "<br>"));
// Questão 38
var numero01 = Number(prompt("Digite o primeiro número decimal:"));
var numero02 = Number(prompt("Digite o segundo número decimal:"));
var numero03 = Number(prompt("Digite o terceiro número decimal:"));
var media = (numero01 + numero02 + numero03) / 3;
document.write("A m\u00E9dia dos n\u00FAmeros \u00E9: ".concat(media, "<br>"));
// Questão 39
var idadeAnos = Number(prompt("Por favor, digite sua idade:"));
var meses = idadeAnos * 12;
var dias = idadeAnos * 365;
document.write("Voc\u00EA j\u00E1 viveu ".concat(meses, " meses e ").concat(dias, " dias.<br>"));
// Questão 40
var valorReais = Number(prompt("Por favor, digite o valor em reais:"));
var cotacaoDolar = Number(prompt("Por favor, digite a cotação do dólar:"));
var valorDolares = valorReais / cotacaoDolar;
document.write("O valor em d\u00F3lares \u00E9: ".concat(valorDolares.toFixed(2), "<br>"));
// Questão 41
var numeroDecimal5 = Number(prompt("Por favor, digite um número decimal:"));
var numeroInteiro4 = Math.round(numeroDecimal5);
document.write("O n\u00FAmero arredondado \u00E9: ".concat(numeroInteiro4, "<br>"));
// Questão 42
var n1 = Number(prompt("Digite o primeiro número inteiro:"));
var n2 = Number(prompt("Digite o segundo número inteiro:"));
var n3 = Number(prompt("Digite o terceiro número inteiro:"));
var resultado2 = (n1 + n2) * n3;
document.write("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(resultado2, "<br>"));
// Questão 43
var celsius = Number(prompt("Por favor, digite uma temperatura em graus Celsius:"));
var fahrenheit = (celsius * 9 / 5) + 32;
document.write("A temperatura em Fahrenheit \u00E9: ".concat(fahrenheit.toFixed(2), "\u00B0F<br>"));
