//Array 
let timesPaulistas = ["Santos", "São Paulo", "Palmeiras", "Ponte Preta"]

//Acessar um item do Array
console.log(timesPaulistas[0])

//Verificar o tamanho do Array
console.log(timesPaulistas.length)

//Adicionar um item no final do Array
timesPaulistas.push("Corinthians")
console.log(timesPaulistas)

//Adicionar um item no inicio do Array
timesPaulistas.unshift("Guarani")
console.log(timesPaulistas)

//Remover um item no inicio do Array
timesPaulistas.shift()
console.log(timesPaulistas)

//Remover um item no fim do Array
timesPaulistas.pop()
console.log(timesPaulistas)

//Verificar a posição de um item
console.log(timesPaulistas.indexOf("Santos"))

//Metodo Splice()
//  - Adicionar
//  - Remover
//  - Modificar

// Remover um item a partir de uma posição
//array.splice(posicao, quantidadeDeItensRemovidos)
timesPaulistas.splice(1,3)
console.log(timesPaulistas)

// Remover um item a partir de um valor
timesPaulistas.splice(timesPaulistas.indexOf("Santos"),1)
console.log(timesPaulistas)

// Adicionando itens dentro de um Array
timesPaulistas.splice(0,0,"Santos", "São Paulo", "Palmeiras", "Corinthians")
console.log(timesPaulistas)

// Modificando itens de um Array
timesPaulistas.splice(2,1,"Guarani", "Ponte Preta", "Palmeiras")
console.log(timesPaulistas)

// Percorrer um Array
console.log("Maiores Times Paulistas");
let i = 0;

timesPaulistas.forEach((time) => {
    i++
    console.log( i , "-", time);
    
})
