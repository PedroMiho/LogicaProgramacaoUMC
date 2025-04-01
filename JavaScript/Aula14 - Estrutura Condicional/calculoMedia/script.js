function calcularMedia(){
    
    let nota1 = parseFloat(document.querySelector("#nota1").value)
    let nota2 = parseFloat(document.querySelector("#nota2").value)
    let nota3 = parseFloat(document.querySelector("#nota3").value)
    let resultado = document.getElementById("resultado")
       
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        resultado.innerHTML =  "Por favor, preencha todos os valores"
    }

    else if (nota1 > 10 || nota2 > 10 || nota3 > 10){
        resultado.innerHTML =  "Por favor, insira notas menores que 10"
    }

    else if (nota1 < 0 || nota2 < 0 || nota3 < 0){
        resultado.innerHTML =  "Por favor, insira notas maiores que 0"
    }   

    else {
        let media = (nota1 + nota2 + nota3) / 3
        
        if (media > 7){
            resultado.innerHTML =  `Média: ${media.toFixed(2)} - Situação Aprovado` 
        }
        else if (media >= 5){
            resultado.innerHTML =  `Média: ${media.toFixed(2)} - Situação Recuperação` 
        }
        else {
            resultado.innerHTML =  `Média: ${media.toFixed(2)} - Situação Reprovado` 
        }

    }   
}