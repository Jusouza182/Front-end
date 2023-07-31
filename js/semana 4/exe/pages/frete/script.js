document.getElementById("form").addEventListener("submit",calcularFrete);

const pesoDoProduto = document.getElementById("peso");
const distanciaDoTrajeto = document.getElementById("distancia");
const botaoReset = document.getElementById("botaoReset");

function calcularFrete(event){
    event.preventDefault()

const custoPeso = pesoDoProduto.value * 0.50;
const custoDistancia = distanciaDoTrajeto.value * 0.10;
const total = (custoPeso + custoDistancia);

document.getElementById("form").hidden = true;
document.getElementById("resultado").hidden = false;
document.getElementById("resultado").innerHTML = `<p>O valor do frete é R$${total}</p>`
document.getElementById("resultado").classList.add("resultado")
botaoReset.hidden = false;
}

botaoReset.addEventListener("click",reset);
function reset(){
    document.getElementById("form").hidden = false;
    botaoReset.hidden = true;
    document.getElementById("resultado").hidden = true;
}