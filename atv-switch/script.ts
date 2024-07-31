enum TipoPagamento {
  PIX = 1,
  Débito = 2,
  Crédito = 3,
  Boleto = 4,
}

let tipoPagamento = prompt("Menu: 1 - PIX 2 - Débito 3 - Crédito 4 - Boleto");

const tipoPagamentoNumero = Number(tipoPagamento);

switch (tipoPagamentoNumero) {
  case TipoPagamento.PIX:
    alert(Pagamento com: ${TipoPagamento[tipoPagamentoNumero]});
    break;
  case TipoPagamento.Débito:
    alert(Pagamento com: ${TipoPagamento[tipoPagamentoNumero]});
    break;
  case TipoPagamento.Crédito:
    alert(Pagamento com: ${TipoPagamento[tipoPagamentoNumero]});
    break;
  case TipoPagamento.Boleto:
    alert(Pagamento com: ${TipoPagamento[tipoPagamentoNumero]});
    break;
  default:
    alert("Tipo de pagamento inválido");
    break;
}

window.location.reload();