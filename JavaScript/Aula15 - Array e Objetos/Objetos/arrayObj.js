let produtos = [
    {nome: "Teclado", categoria: "Periférico", preco: 200},
    {nome: "Mouse", categoria: "Periférico", preco: 150},
    {nome: "Computador", categoria: "Eletrônico", preco: 5000},
    {nome: "Monitor", categoria: "Eletrônico", preco: 750}
]

// Lista de Produtos
// Percorrer um array com objetos
produtos.forEach((produto) => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
})

//Fazer calculos de itens dentro de um array
const total = produtos.reduce((soma, produto) => soma + produto.preco, 0)
console.log(`O valor total de todos os produtos é R$ ${total}`);


//Ofertando desconto MAP
const produtosComDesconto = produtos.map( produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9
}))

console.log(produtosComDesconto);

// 1 - Criar um filtro por categoria - filter
// 2 - Aplicar o desconto por tipo categoria - map
// 3 - Soma todos os produtos por categoria - reduce


console.log("Produtos Eletrônicos");
// 1 - Criar um filtro por categoria - filter'
const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônico")

// 2 - Aplicar o desconto de 5% para categoria Eletrônicos - map
const produtosEletronicosDesconto = produtosEletronicos.map(produto => ({
    nome: produto.nome,
    categoria: produto.categoria,
    preco: produto.preco * 0.95
}))

// 3 - Soma todos os produtos da categoria eletrônicos - reduce
const somaProdutosEletronicosDesconto = produtosEletronicosDesconto.reduce((soma, produto) => soma + produto.preco,0)

//Valor Produtos Eletrônicos
console.log(produtosEletronicosDesconto);
console.log("R$" , somaProdutosEletronicosDesconto);


console.log("Produtos Periférico");
const produtosPerifericos = produtos.filter(produto => produto.categoria === "Periférico")
// 2 - Aplicar o desconto de 10% para categoria Periférico - map
const produtosPerifericosDesconto = produtosPerifericos.map(produto => ({
    nome: produto.nome,
    categoria: produto.categoria,
    preco: produto.preco * 0.9
}))

// 3 - Soma todos os produtos da categoria Periférico - reduce
const somaProdutosPerifericosDesconto = produtosPerifericosDesconto.reduce((soma, produto) => soma + produto.preco,0)

//Valor Produtos Periférico
console.log(produtosPerifericosDesconto);
console.log("R$" , somaProdutosPerifericosDesconto);