function calcularPagamento() {


    let formaPagamento = "cheque"
    let valorTotal = 100
    let valorFinal

    switch (formaPagamento) {
        case "pix":
            valorFinal = valorTotal * 0.9
            console.log(valorFinal);
            break
        case "debito":
            valorFinal = valorTotal * 0.95
            console.log(valorFinal);
            break
        case "credito":
            console.log(valorTotal);
            break
        default:
            console.log("Informe uma forma de pagamento válida");
            break

    }
}