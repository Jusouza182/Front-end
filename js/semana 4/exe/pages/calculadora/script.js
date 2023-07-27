function clicarNoBotao(){
if(document.getElementById("botaoEntrar").innerHTML === "Entrar"){
    var primeiroTermo = Number(document.getElementById("primeiroTermo").value);
    var segundoTermo= Number(document.getElementById("segundoTermo").value);
    var operacoesMatematicas = document.getElementById("operacoesMatematicas").value
    
    if(operacoesMatematicas === 'Adição'){
        var resultado = (primeiroTermo + segundoTermo)
        document.getElementById("botaoEntrar").innerHTML = (`${primeiroTermo} + ${segundoTermo} = ${resultado}`)
    }else if(operacoesMatematicas === 'Subtração' ){
        var resultado = (primeiroTermo - segundoTermo)
        document.getElementById("botaoEntrar").innerHTML = (`${primeiroTermo} - ${segundoTermo} = ${resultado}`)
    }else if(operacoesMatematicas === 'Multiplicação'){
        var resultado = (primeiroTermo * segundoTermo)
        document.getElementById("botaoEntrar").innerHTML = (`${primeiroTermo} x ${segundoTermo} = ${resultado}`)
    }else if(operacoesMatematicas === 'Divisão'){
        var resultado = (primeiroTermo / segundoTermo)
        document.getElementById("botaoEntrar").innerHTML = (`${primeiroTermo} / ${segundoTermo} = ${resultado}`)
    }
    document.getElementById("botaoEntrar").classList.remove("botao")
    document.getElementById('botaoEntrar').classList.add("novoBotao")
    document.getElementById("imgBotao").hidden  = false;


}else if(document.getElementById("botaoEntrar").innerHTML !== "Entrar"){
    document.getElementById("botaoEntrar").innerHTML = "Entrar"
    document.getElementById("botaoEntrar").classList.remove("novoBotao")
    document.getElementById("botaoEntrar").classList.add("botao")
    document.getElementById("primeiroTermo").value = "";
    document.getElementById("segundoTermo").value = "";
    document.getElementById("imgBotao").hidden  = true;

}





}

