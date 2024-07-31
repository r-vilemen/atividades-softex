var _a, _b, _c, _d;
var TipoPagamento;
(function (TipoPagamento) {
    TipoPagamento[TipoPagamento["PIX"] = 1] = "PIX";
    TipoPagamento[TipoPagamento["D\u00E9bito"] = 2] = "D\u00E9bito";
    TipoPagamento[TipoPagamento["Cr\u00E9dito"] = 3] = "Cr\u00E9dito";
    TipoPagamento[TipoPagamento["Boleto"] = 4] = "Boleto";
})(TipoPagamento || (TipoPagamento = {}));
var tipoPagamento = prompt("Menu: 1 - PIX 2 - Débito 3 - Crédito 4 - Boleto");
var tipoPagamentoNumero = Number(tipoPagamento);
switch (tipoPagamentoNumero) {
    case TipoPagamento.PIX:
        alert(Pagamento, com, $, (_a = { TipoPagamento: TipoPagamento }, _a[tipoPagamentoNumero] = , _a));
        break;
    case TipoPagamento.Débito:
        alert(Pagamento, com, $, (_b = { TipoPagamento: TipoPagamento }, _b[tipoPagamentoNumero] = , _b));
        break;
    case TipoPagamento.Crédito:
        alert(Pagamento, com, $, (_c = { TipoPagamento: TipoPagamento }, _c[tipoPagamentoNumero] = , _c));
        break;
    case TipoPagamento.Boleto:
        alert(Pagamento, com, $, (_d = { TipoPagamento: TipoPagamento }, _d[tipoPagamentoNumero] = , _d));
        break;
    default:
        alert("Tipo de pagamento inválido");
        break;
}
window.location.reload();
