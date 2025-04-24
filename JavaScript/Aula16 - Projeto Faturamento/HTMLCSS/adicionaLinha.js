function Adicionar(){
    let form = document.querySelector('#form-adiciona')

    let produtoNome = form.produto.value
    console.log(produto);

    let valor = form.valor.value
    console.log(valor);

    let quantidade = form.quantidade.value
    console.log(quantidade);

    if (!produto || !quantidade || !valor){
        window.alert("Por favor, preencha todos os campos antes de adicionar")
    }
    else {

        //Criando os elementos
        let produto = document.createElement("tr")
        let codigoTD = document.createElement("td")
        let nomeTD = document.createElement("td")
        let valorUnitTD = document.createElement("td")
        let quantidadeTD = document.createElement("td")
        let valorTotalTD = document.createElement("td")

        //Atribuir os valores aos elementos
        codigoTD.textContent = document.querySelectorAll('tr').length
        nomeTD.textContent = "Bolo de " + produtoNome
        valorUnitTD.textContent = valor
        quantidadeTD.textContent = quantidade
        valorTotalTD.innerHTML = "R$ " + (parseInt(quantidade) * parseFloat(valor)).toFixed(2)

        //
        produto.appendChild(codigoTD)
        produto.appendChild(nomeTD)
        produto.appendChild(quantidadeTD)
        produto.appendChild(valorUnitTD)
        produto.appendChild(valorTotalTD)

        let tabela = document.querySelector("#tabela-produtos")
        tabela.appendChild(produto)
    }



}