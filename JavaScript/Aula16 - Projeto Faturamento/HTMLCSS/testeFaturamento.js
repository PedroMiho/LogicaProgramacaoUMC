//Seleciona o TR produto
let produtos = document.querySelectorAll(".produto")

for (let i = 0; i < produtos.length; i++){   
    //Seleciona os TD que estão no TR produto
    let valorUnitProduto = produtos[i].querySelector(".info-valor-unidade").textContent
    let quantidadeProduto = produtos[i].querySelector(".info-quantidade").textContent
    let valorTotalProduto = produtos[i].querySelector(".info-valor-total ")
    
    //Excluir o R$
    let valorUnitProdutoLimpo = valorUnitProduto.replace(/R\$\ /, "")
    
    valorTotalProduto.innerHTML = "R$ " + (parseFloat(valorUnitProdutoLimpo) * parseInt(quantidadeProduto)).toFixed(2)   
}