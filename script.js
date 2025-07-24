function soma(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = n1+n2
}


function sub(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSub")

    resposta.textContent = n1-n2
}

function multi(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respMulti")

    resposta.textContent = n1*n2
}

function div(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respDiv")

if(n2 !== 0){
    resposta.textContent = n1/n2
}else{
    resposta.textContent = "Não se divide por 0"
}
}

function media(){

    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var n3 = document.getElementById("n3").valueAsNumber
    var n4 = document.getElementById("n4").valueAsNumber
    var n5 = document.getElementById("n5").valueAsNumber
    var resposta = document.getElementById("respMedia")

    resposta.textContent = (n1+n2+n3+n4+n5)/5}
