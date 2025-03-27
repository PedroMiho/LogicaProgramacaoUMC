//getElementsByTagName - Seleciona todas as tag que você desejar 
let paragrafos = document.getElementsByTagName("p")
paragrafos[0].innerHTML = "Palmeiras 2 x 0, sem mundial"

//getElementById - Seleciona um elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML = "Alterado usando JS"

//getElementsByClassName - Selecionda todas os elementos do tipo class
const caixas = document.getElementsByClassName("caixa")
caixas[0].style.backgroundColor = "red"
caixas[1].style.backgroundColor = "green"

//querySelector - Seleciona um elemento do tipo Class ou Id 
const paragrafoQuery = document.querySelector("#paragrafoQuery")
paragrafoQuery.style.backgroundColor = "lightblue"
paragrafoQuery.style.padding = "10px"


function alteraTexto() {
    let input = document.getElementsByTagName("input")[0].value
    titulo.innerHTML = input
}

function alteraParagrafo(){
    let input = document.getElementsByTagName("input")[1].value
    paragrafoQuery.innerHTML = input
}

//querySelectorAll - Seleciona todos elemento do tipo Class ou Id 
const caixaQuery = document.querySelectorAll(".caixaQuery")
caixaQuery[0].style.backgroundColor = "purple"
caixaQuery[1].style.backgroundColor = "black"
caixaQuery[1].style.color = "white"