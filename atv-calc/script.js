var _a;
var notas = [];
var maiorNota = Number.MIN_SAFE_INTEGER;
var menorNota = Number.MAX_SAFE_INTEGER;
var totalNotas = 0;
var somaNotas = 0;
var aprovados = 0;
var reprovados = 0;
(_a = document.getElementById("inserirNotas")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    receberNotas();
});
function receberNotas() {
    var continuar = true;
    while (continuar) {
        var input = prompt("Digite uma nota (ou -1 para terminar):");
        if (input === null) {
            continuar = false;
            break;
        }
        var nota = parseFloat(input);
        if (nota === -1) {
            continuar = false;
        }
        else if (!isNaN(nota)) {
            notas.push(nota);
            if (nota > maiorNota)
                maiorNota = nota;
            if (nota < menorNota)
                menorNota = nota;
            somaNotas += nota;
            totalNotas++;
            if (nota >= 7) {
                aprovados++;
            }
            else {
                reprovados++;
            }
        }
    }
    calcularEstatisticas();
    exibirResultados();
}
function calcularEstatisticas() {
    if (totalNotas === 0) {
        alert("Nenhuma nota foi inserida.");
        return;
    }
    var mediaNotas = somaNotas / totalNotas;
    alert("Maior Nota: ".concat(maiorNota, "\nMenor Nota: ").concat(menorNota, "\nTotal de Notas: ").concat(totalNotas, "\nM\u00E9dia das Notas: ").concat(mediaNotas.toFixed(2), "\nAprovados: ").concat(aprovados, "\nReprovados: ").concat(reprovados));
}
function exibirResultados() {
    var resultadosDiv = document.getElementById("resultados");
    var mediaNotas = somaNotas / totalNotas;
    if (resultadosDiv) {
        resultadosDiv.innerHTML = "\n\t  <p>Maior Nota: ".concat(maiorNota, "</p>\n\t  <p>Menor Nota: ").concat(menorNota, "</p>\n\t  <p>Total de Notas: ").concat(totalNotas, "</p>\n\t  <p>M\u00E9dia das Notas: ").concat(mediaNotas.toFixed(2), "</p>\n\t  <p>Aprovados: ").concat(aprovados, "</p>\n\t  <p>Reprovados: ").concat(reprovados, "</p>\n\t");
    }
}
