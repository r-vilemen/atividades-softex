let notas: number[] = [];
let maiorNota: number = Number.MIN_SAFE_INTEGER;
let menorNota: number = Number.MAX_SAFE_INTEGER;
let totalNotas: number = 0;
let somaNotas: number = 0;
let aprovados: number = 0;
let reprovados: number = 0;

document.getElementById("inserirNotas")?.addEventListener("click", function () {
  receberNotas();
});

function receberNotas() {
  let continuar = true;
  while (continuar) {
    const input = prompt("Digite uma nota (ou -1 para terminar):");
    if (input === null) {
      continuar = false;
      break;
    }
    const nota = parseFloat(input);
    if (nota === -1) {
      continuar = false;
    } else if (!isNaN(nota)) {
      notas.push(nota);
      if (nota > maiorNota) maiorNota = nota;
      if (nota < menorNota) menorNota = nota;
      somaNotas += nota;
      totalNotas++;
      if (nota >= 7) {
        aprovados++;
      } else {
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
  const mediaNotas = somaNotas / totalNotas;
  alert(
    `Maior Nota: ${maiorNota}\nMenor Nota: ${menorNota}\nTotal de Notas: ${totalNotas}\nMédia das Notas: ${mediaNotas.toFixed(
      2
    )}\nAprovados: ${aprovados}\nReprovados: ${reprovados}`
  );
}

function exibirResultados() {
  const resultadosDiv = document.getElementById("resultados");
  const mediaNotas = somaNotas / totalNotas;
  if (resultadosDiv) {
    resultadosDiv.innerHTML = `
	  <p>Maior Nota: ${maiorNota}</p>
	  <p>Menor Nota: ${menorNota}</p>
	  <p>Total de Notas: ${totalNotas}</p>
	  <p>Média das Notas: ${mediaNotas.toFixed(2)}</p>
	  <p>Aprovados: ${aprovados}</p>
	  <p>Reprovados: ${reprovados}</p>
	`;
  }
}
